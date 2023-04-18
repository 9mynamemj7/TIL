## Node React

### 준비

install node.js ( [v18.16.0](https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi) )

run [setting.sh](./setting.sh)

| `실행`

```bash
npm run node index.js
```

### 과정

- [NodeJs와 ExpressJs 다운 및 몽고DB연결](./boiler-plate/index.js)
- [몽고DB Model & Schema](./boiler-plate/models/User.js)


### 오류해결

| `json파일 로드 오류`

- required 사용 - [참고](https://takeknowledge.tistory.com/141)

- import 사용 - [참고](https://sig03.medium.com/javascript-%EC%97%90%EC%84%9C-json-%ED%8C%8C%EC%9D%BC-include-%ED%95%98%EB%8A%94-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B0%A9%EB%B2%95-%EB%91%90-%EA%B0%80%EC%A7%80-eacf9eb63eb2)

| `Mongoose save() 미지원`

- async, await 와 then, catch 사용 - [참고](https://www.inflearn.com/questions/805491/%EA%B0%95%EC%9D%98%EC%97%90-%EB%82%98%EC%98%A4%EB%8A%94-%EB%AC%B8%EB%B2%95%EC%9D%B4-%EC%A0%81%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4)