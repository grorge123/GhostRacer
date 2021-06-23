require('./post.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);
const lib = require('./library');
const schemaSql = `
    -- Extensions
    CREATE EXTENSION IF NOT EXISTS pg_trgm;

    -- Drop (droppable only when no dependency)
    DROP TABLE IF EXISTS account;
    DROP TABLE IF EXISTS library;
    DROP TABLE IF EXISTS friend;
    DROP TABLE IF EXISTS ladder;
    DROP TABLE IF EXISTS history;
    DROP INDEX IF EXISTS account_name;
    DROP INDEX IF EXISTS history_speed;
    DROP INDEX IF EXISTS history_time;

    -- Create
    CREATE TABLE account(
        id              serial PRIMARY KEY NOT NULL,
        name            text NOT NULL,
        nickname        text NOT NULL,
        maxspeed        integer NOT NULL DEFAULT 0,
        speed           integer NOT NULL DEFAULT 1,
        money           integer NOT NULL DEFAULT 0,
        acc             integer NOT NULL DEFAULT 0,
        img             integer NOT NULL DEFAULT 0,
        times           integer NOT NULL DEFAULT 0
    );
    CREATE TABLE library(
        id              serial PRIMARY KEY NOT NULL,
        hash            text NOT NULL,
        text            text NOT NULL
    );
    CREATE TABLE friend(
        name          text NOT NULL,
        friend        text NOT NULL
    );
    CREATE TABLE ladder(
        name            text NOT NULL,
        score           integer NOT NULL
    );
    CREATE TABLE history(
        time            integer NOT NULL DEFAULT extract(epoch from now()),
        hash            text NOT NULL,
        name            text NOT NULL,
        speed           integer NOT NULL,
        winner          bool NOT NULL DEFAULT false
    );
    CREATE INDEX account_name ON account USING btree(name);
    CREATE INDEX history_speed ON history USING btree(speed);
    CREATE INDEX history_time ON history USING btree(time);
`;
const dataSql = `
        INSERT INTO account(name, speed, times, nickname) VALUES('admin', 64, 1, 'admin');
`;

db.none(schemaSql)
  .then(() => {
    console.log('Schema created');
    db.none(dataSql).then(() => {
        sql = `
            INSERT INTO library(hash, text) VALUES($1, $2);
        `
        for(let i = 0 ; i < library.length ; i++){
            db.none(sql, [lib.hash[i], lib.library[i]]).then(()=>{
                console.log('text:',i,'populated')
                if(i == library.length - 1)pgp.end();
            })
        }
        console.log('Data populated');
      });  
  })
  .catch((err) => {
    console.log('Error creating schema', err);
  });
