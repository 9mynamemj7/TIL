### 타입 스크립트 함수형 프로그래밍 실습

> DB용 배치 프로그램과 백엔드 서버, 프런트엔드 웹 개발에 대해 공부

#### 구성

- Node.js의 fs 패키지가 제공하는 비동기 방식 API들의 Promise 방식 구현
- range, zip 같은 유틸리티 함수 구현
- chance 패키지를 사용해 그럴듯한 가짜 데이터 생성 코드 구현
- CSV 파일 포맷 데이터를 읽고 쓰는 코드 구현

```bash
# node.js의 fs패키지를 사용하므로 @type/node 패키지 설치
npm init --y
npm i -D typescript ts-node @types/node
# 디렉터리 생성과 삭제 기능을 위한 패키지 설치
npm i -S mkdirp rimraf
npm i -D @types/mkdirp @types/rimraf
# fake data를 만들어주는 chance 패키지 설치
npm i -S chance
npm i -D @types/chance
```

</br></br>

#### 노드 제이에스에서 프로그램 명령 줄 인수 읽기