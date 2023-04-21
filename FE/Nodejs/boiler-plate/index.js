const express = require('express')
const app = express()
const port = 5000
const bodyParer = require('body-parser');

const config = require('./config/key');

// 모델 호출
const { User } = require('./models/User')

// bodyparser setting
// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있게 만듬
app.use(express.urlencoded({extended: true}));
// application/json 데이터를 분석해서 가져올 수 있게 만듬
app.use(express.json());


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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

