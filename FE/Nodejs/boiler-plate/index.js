const express = require('express')
const app = express()
const port = 5000
const bodyParer = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

// 모델 호출
const { User } = require('./models/User')

// bodyparser setting
// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있게 만듬
app.use(express.urlencoded({extended: true}));
// application/json 데이터를 분석해서 가져올 수 있게 만듬
app.use(express.json());
// 쿠키파서
app.use(cookieParser());

// Connect MongoDB
const myData = require('./personal.json');
const mongoose = require('mongoose');


const myHostNum = myData.mongo.host;
mongoose.connect(myHostNum).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


// 라우팅
app.get('/', (req, res) => {
  res.send("Hello hhh")
})

app.post('/register', async (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 Client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)

  const result = await user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })
})

// app.post('/login', (req, res) => {
//   // 요청된 이메일을 데이터베이스에서 있는지 찾는다
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if(!user) {
//       return res.json({
//         loginSuccess: false,
//         message: "이메일 오류"
//       })
//     }
  
//     // 요정된 이메일이 데이터베이스에 있다면 비밀번호 확인
//     user.comparePassword(req.body.password, (err,isMatch) => {
//       if(!isMatch)
//         return res.json({ loginSuccess: false, message: "비밀번호 오류"
//       // 비밀번호도 맞다면 토큰을 생성
//       user.generateToken((err,user) => {
//         if(err) return res.status(400).send(err);
        
//         // 토큰 저장 쿠키에
//         res.cookie("x_auth", user.token)
//         .status(200)
//         .json({ loginSuccess: true, userId: user._id })
//         })
//       })
//     })
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

