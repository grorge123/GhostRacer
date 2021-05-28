const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const router = express.Router();

router.use(bodyParser.json());
function list() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data.json')) {
            fs.writeFileSync('data.json', '');
        }
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) reject(err);

            let posts = data ? JSON.parse(data) : [];
            resolve(posts);
        });
    });
}
function is_admin(account, password) {
    return new Promise((resolve, reject) => {
        list().then((posts)=>{
            let fi = 0;
            for(let i of posts){
                if(i["account"] == account && i["password"] == password && i["identity"] == "admin"){
                    fi = 1;
                }
            }
            if(fi){
                resolve("successful");
            }else{
                reject("You do not have permission");
            }
        }).catch((e)=>{
            console.log(e);
            reject(e);
        });
    })
}
router.post('/list', function (req, res, next) {
    list().then((posts)=>{
        const { account , password} = req.body;
        for(let i of posts){
            if(i["account"] == account && i["password"] == password && i["identity"] == "admin"){
                res.json(posts);
                return;
            }
        }
        throw new Error("You do not have permission");
    }).catch((e)=>{next(e)});
});
router.post('/valider', function(req, res, next){
    const { account , password} = req.body;
    list().then((posts) => {
        for(let i of posts){
            if(i["account"] == account && i["password"] == password){
                res.json({public:i["public"], secret:i["secret"], identity:i["identity"]});
                return;
            }
        }
        res.json({public:"None", secret:"None"});    
    }).catch((e)=>{next(e)});
});

router.post('/create', function(req, res, next){
    const { account, public, secret, name, email,identity, password} = req.body;
    const newPost = {
        account: account,
        public: public,
        password: password,
        secret: secret,
        name: name,
        email: email,
        identity: identity,
    };
    

})

router.put('/update', function(req, res, next){
    const { account, public, secret, name, email, identity, password} = req.body;
    const newPost = {
        account: account,
        public: public,
        password: password,
        secret: secret,
        name: name,
        email: email,
        identity: identity,
    };
    list().then((posts) =>{
        for(let i = 0 ; i < posts.length ; i ++){
            if(post[i]["account"] == account){
                post[i] = newPost;
            }
        }
        fs.writeFile('data.json', JSON.stringify(posts), (err) => {
            if (err) throw err;
            res.send("successful");
        });
    }).catch((e) => {next(e)});

})

router.delete('/delete', function(req, res, next){
    const { account, password, del_account } = req.body;
    is_admin(account, password).then(()=>{
        list().then((posts) =>{
            let fi = 0;
            let newPosts = [];
            for(let i = 0 ; i < posts.length ; i ++){
                if(posts[i]["account"] == del_account){
                    fi = 1;
                }else{
                    newPosts.push(posts[i]);
                }
            }
            fs.writeFile('data.json', JSON.stringify(newPosts), (err) => {
                if (err) throw err;
                if(!fi){
                    res.send("Not found");
                    return;
                }
                res.send("successful");
            });        
        }).catch((e) => {next(e)});
    }).catch(err=>{
        console.log("ret",account, password);
        res.send(err);
    });
})

module.exports = router;