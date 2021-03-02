var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');

var multer = require('multer'); 

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
            //이미지 업로드 성공적으로 완료되었다.
            console.log("이미지 파일");
            cb(null, 'uploads/images');
        } 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

var db = mysql.createConnection({
    host: '192.249.18.100',
    port: '3306',
    user: 'cloice',
    password: 'cloice1234',
    database: 'cloicedb'
})

db.connect(function(error){
    if(error) console.log(error)
    else console.log("connected")
});

app.listen(3333, () => {
    console.log("server connected");
});

//회원가입용
app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const nickname = req.body.nickname;
    const gender = req.body.gender;

    //res.send를 무조건 해줘야지 then 함수에서 응답을 할 수 있다.
    db.query("INSERT INTO users (email, password, nickname, gender) VALUES (?,?,?,?)", [email, password, nickname, gender], (err, result) => {
        if(err) {
            console.log(err);
            res.send({ message: "회원 가입 실패" });
        }
        console.log("회원 정보 입력 완료")
        res.send(result)
    })
})

//로그인용
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if(err) {
                res.send({ err: err })   
            }
            
            if(result.length > 0) {
                res.send(result);
                console.log("로그인 성공");
            } else {
                console.log("로그인 실패");
                res.send({ message: "Wrong email/password combination" });
            }
    })
})

//이메일 중복확인
app.post("/dupemail", (req, res) => {
    const email = req.body.email;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result) => {
            if(err) {
                res.send({ err: err })   
            }
            
            if(result.length > 0) {
                res.send({ message: "중복된 이메일" });
                console.log("중복된 이메일");
            } else {
                res.send(result);
                console.log("이메일 생성 가능");
            }
    })
})

//닉네임 중복확인
app.post("/dupnick", (req, res) => {
    const nickname = req.body.nickname;

    db.query(
        "SELECT * FROM users WHERE nickname = ?",
        [nickname],
        (err, result) => {
            if(err) {
                res.send({ err: err })   
            }
            
            if(result.length > 0) {
                res.send({ message: "중복된 닉네임" });
                console.log("중복된 닉네임");
            } else {
                res.send(result);
                console.log("닉네임 생성 가능");
            }
    })
})

//파일 업로드 및 디비에 위치 저장
app.post('/uploadImage', (req, res) => {
    const base64Image = req.body.base64Image;

    db.query("INSERT INTO files (file) VALUES (?)", [base64Image], (err, result) => {
        
    })
})