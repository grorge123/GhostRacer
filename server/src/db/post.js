require('dotenv').config();

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

if (!global.db) {
    try {
        process.env.DB_URL = `postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
    // only used for debugging
    console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
    } catch (err) {
    console.log(
        err,
        '\n\nError configuring the project. Have you set the environment veriables?'
    );
    }
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}
  
function uploadspeed(name, speed, acc){
    checkaccount(name).then((data)=>{
        speed = parseInt(speed)
        maxSpeed = parseInt(data.maxspeed)
        sql = `
        UPDATE account
        SET speed = $1,
        maxSpeed = $4,
        times = $2,
        acc = $5
        WHERE
        name= $3
        `;
        console.log([(data.speed*data.times+speed)/(data.times+1), data.times + 1, name, Math.max(maxSpeed, speed), (data.acc*data.times+data.acc)/(data.times+1)])
        return db.none(sql,[(data.speed*data.times+speed)/(data.times+1), data.times + 1, name, Math.max(maxSpeed, speed), (data.acc*data.times+data.acc)/(data.times+1)]);
    });
}
function addhistory(name, speed, hash, win){
    sql = `
    INSERT INTO history(hash, name, speed, winner) VALUES($1, $2, $3, $4);
    `;
    return db.none(sql,[hash, name, speed, win]);
}
function createAccount(name){ 
    const dataSql = `
        INSERT INTO account(name, nickname, speed, img) VALUES($1, $1, 1, $2);
    `;
    return db.none(dataSql,[name, randomInt(0,5)]);
}
function listall(table){
    let sql = `
            SELECT *
            FROM 
    `;
    sql += table;
    return db.any(sql);
}
function checkaccount(name){
    const sql = `
        SELECT * FROM account WHERE name=$1;
    `;
    return db.oneOrNone(sql,[name]);
}
function getMaxSpeed(name, hash){
    const sql = `
        SELECT * FROM history WHERE name=$1 AND hash=$2 ORDER BY speed DESC LIMIT 1;
    `;
    return db.oneOrNone(sql, [name, hash]);
}
function maxId(table){
    sql = `
    SELECT MAX(id) FROM 
    `;
    sql += table + ';';
    return db.one(sql);
}
function getAtical(id){ 
    const sql = `
        SELECT * FROM library WHERE id=$1;
    `;
    return db.one(sql,[id]);
}
function getFriend(name){ 
    const sql = `
        SELECT * FROM friend WHERE name=$1;
    `;
    return db.any(sql,[name]);
}
function addFriend(from, to){
    return new Promise((resolve, reject) =>{
        checkaccount(to).then((data)=>{
            if(data == null){
                reject("Your friend doesn't exist")
            }else{
                const sql = `
                SELECT * FROM friend WHERE name=$1 AND friend=$2;
                `;
                db.any(sql, [from, to]).then((data)=>{
                    if(data.length == 0){
                        const sql2 = `
                        INSERT INTO friend(name,friend) VALUES($1, $2);
                        `;
                        db.none(sql2, [from, to]).then(()=>{resolve()});
                    }else{
                        resolve();
                    }
                }).catch(e=>{
                    reject(e)
                });
            }
        });
    });
}
function getLadder(name){
    const sql = `
        SELECT * FROM ladder WHERE name=$1;
    `;
    return db.oneOrNone(sql, [name]);
}
function getAllLadder(){
    const sql = `
        SELECT * FROM ladder ORDER BY score DESC;
    `;
    return db.many(sql);
}
async function rankLadder(name){
    let data = await getLadder(name);
    const sql = `
        SELECT COUNT(*) FROM ladder WHERE score > $1;
    `;
    if(data == null)return 2147483647;
    let rank = await db.one(sql, [data.score]);
    return await parseInt(rank.count) + 1;
}
async function updateLadder(name, score){
    let data = await getLadder(name);
    if(data == null){
        const sql=`
            INSERT INTO ladder(name, score) VALUES($1, $2);
        `;
        await db.none(sql, [name,score]);
    }else{
        const sql=`
            UPDATE ladder
            SET score = $1
            WHERE
                name=$2;
        `;
        await db.none(sql,[score, name]);
    }
    return;
}
function setMoney(name, delta){
    const checksql = `
        SELECT * FROM account WHERE name=$1;
    `;
    return new Promise((resolve, reject) =>{
        db.oneOrNone(checksql,[name]).then((data)=>{
            if(data == null){
                reject("Can't find user");
                return;
            }
            if(data.money + delta < 0){
                reject("This User have enough money");
                return;
            }
            const sql = `
            UPDATE account
            SET money = $1
            WHERE
            name= $2
            `;
            db.any(sql, [data.money + delta, name]).then(()=>{
                resolve();
            });
        });
    });
}
function getToday(name){
    now = new Date();
    time = new Date(now.getFullYear(),now.getMonth(),now.getDate(),8,0,0);
    console.log(time)
    let query_time = time.getTime()/1000;
    sql = `SELECT COUNT(*) FROM history WHERE time>$1 AND name=$2 AND winner=true`;
    return db.one(sql, [query_time, name]);
}
function getLasthistory(name){
    sql = `SELECT * FROM history WHERE name=$1 ORDER BY time DESC LIMIT 3;`;
    return db.any(sql, [name]);
}
module.exports = {
    checkaccount,
    listall,
    createAccount,
    uploadspeed,
    addhistory,
    maxId,
    getAtical,
    getFriend,
    addFriend,
    getMaxSpeed,
    getLadder,
    getAllLadder,
    updateLadder,
    rankLadder,
    setMoney,
    getToday,
    getLasthistory,
};
  