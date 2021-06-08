const express = require('express');
const bodyParser = require('body-parser');
const sha = require('js-sha256');

const dbp = require('../db/post');

const router = express.Router();

router.use(bodyParser.json());
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function check_access(token){
    return new Promise((resolve, reject) => {
        dbp.checkaccount(token)
        .then((data) =>{
            if(data != null)
                resolve();
            else
                dbp.createAccount(token).then(()=>{resolve();}).catch(e=>{reject(e);});                
        })
        .catch(err =>{
            reject(err);
        });
    });
};
function check_story(op){
    console.log(op)
    for(const i of op){
        console.log(i)
        if(i == "lawrence"){
            return "恭喜你打敗了終極魔王吳邦寧";
        }
    }
    return '';
}
router.get('/getProfile', function (req, res, next){
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.checkaccount(name).then((data)=>{
            res.json({
                'ID':data.name,
                'speed':data.speed,
            })
        });
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e)
    });
});

router.post('/updateHistory', function (req, res, next){
    const {speed, hash, Opponent1, Opponent2, Opponent3} = req.body;
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.uploadspeed(name,speed);
        dbp.addhistory(name, speed, hash);
        res.json({"success":true,"throw":check_story([Opponent1, Opponent2, Opponent3])});
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.get('/randomAticle', function (req, res, next){
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        dbp.maxId('library').then((maxId)=>{
            let rid = Math.floor(Math.random() * (maxId.max)) + 1;
            dbp.getAtical(rid).then((data)=>{
                res.json({
                    "text":data.text,
                    "hash":data.hash,
                });
            }).catch(e=>{
                console.log(e);
                res.status(403).send(e);    
            })
        }).catch(e=>{
            console.log(e);
            res.status(403).send(e);    
        })
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.post('/randomOpponent', function (req, res, next){
    const {ID, Ladder, hash} = req.body;
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        dbp.checkaccount(ID).then((mydata)=>{
            if(parseInt(Ladder)){
                res.json({
                    "Opponent0":ID,
                    "Speed0":parseInt(mydata.speed)+10,
                })
            }else{
                now = 0;
                ret = {}
                if(mydata.speed > 70 && randomInt(0, 10) == 0 && now < 3){
                    ret["Opponent"+now] = "lawrence";
                    ret["Speed"+now] = 75;
                    now += 1;
                }
                dbp.getMaxSpeed(ID, hash).then((data)=>{
                    if(data != null && now < 3){
                        ret["Opponent"+now] = ID;
                        ret["Speed"+now] = data.speed;
                        now += 1;
                    }
                    dbp.getFriend(ID).then((data)=>{
                        prol = []
                        for(i of data){
                            prol.push(dbp.getMaxSpeed(i.friend, hash));
                        }
                        Promise.all(prol).then((data)=>{
                            for(i of data){
                                if(i != null && now < 3){
                                    ret["Opponent"+now] = i.name;
                                    ret["Speed"+now] = i.speed;
                                    now += 1;
                                }
                            }
                            while(now < 3){
                                ret["Opponent"+now] = sha.sha256(String(randomInt(1,50000)));
                                ret["Speed"+now] = randomInt(mydata.speed-5, mydata.speed+5);
                                now += 1;
                            }
                            res.json(ret)
                        })
                    })
                });
            }
        });
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.post('/addFriend', function (req, res, next){
    const {ID} = req.body;
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.addFriend(name, ID).then(()=>{
            res.json({"success":"true","throw":""});
        }).catch(e=>{
            console.log(e);
            res.json({"success":"false","throw":e});
        });
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.get('/getFriendList', function (req, res, next){
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.getFriend(name).then((data)=>{
            console.log(data);
            ret = {}
            for(let i = 0 ; i < data.length ; i++){
                ret["friend" + i] = data[i].friend;
            }
            ret["len"] = data.length;
            res.json(ret);
        });
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.get('/getLadder', function (req, res, next){
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        dbp.getAllLadder().then((data)=>{
            ret = {};
            for(let i = 0 ; i < data.length ; i++){
                ret["people"+i] = data[i].name;
                ret["score"+i] = data[i].score;
            }
            ret["len"] = data.length;
            req.json(ret);
        });
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

router.post('/updateLadder', function (req, res, next){
    const {speed, hash, money} = req.body;
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.rankLadder(name).then((oldrank)=>{
            let score = parseInt(speed) * parseInt(money);
            dbp.updateLadder(name, score).then(()=>{
                dbp.rankLadder(name).then((newrank)=>{
                    res.json({"success":"true", "throw":"", "result":String(parseInt(oldrank) == 2147483647?2147483647:parseInt(oldrank)-parseInt(newrank))});
                })
            })
        })
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});
router.get('/rankLadder', function (req, res, next){
    const {speed, hash, money} = req.body;
    const {token} = req.headers;
    if (token == undefined){
        res.status(401).send('You need request with token');
        return;
    }
    check_access(token)
    .then(()=>{
        let name = token;
        dbp.rankLadder(name).then((oldrank)=>{
            res.json({
                "result":String(oldrank),
            })
        })
    }).catch(e=>{
        console.log(e);
        res.status(403).send(e);
    });
});

module.exports = router;