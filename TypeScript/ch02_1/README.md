### 타입스크립트 프로젝트 만들기
```bash
mkdir ch02_1
cd ch02_1
npm init --y
```

타입스크립트 개발은 node.js 프로젝트를 만든 다음, 개발 언어를 타입스크립트로 설정하는 방식으로 진행한다.<br>
mkdir -> 디렉토리 하나를 만들고<br>
npm init --y -> package.json 이란 이름의 파일을 만든다 
- package.json은 node.js가 관리하는 패키지 관리 파일로 프로젝트에 필요한 패키지를 관리 [[참고]](https://hoya-kim.github.io/2021/09/14/package-json/)<br>

- 오류는 아니지만 warning 해결 [[참고]](https://velog.io/@do_ng_iill/npm-WARN-config-global-global-local-are-deprecated.-Use-locationglobal-instead.-%ED%95%B4%EA%B2%B0)
    ```md
    npm warn config global `--global`, `--local` are deprecated. use `--location=global` instead

    1. powershell 관리자 권한 -> Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
    2. npm install --global --production npm-windows-upgrade
    3. npm-windows-upgrade
    ```


<br>
<br>

#### 프로젝트 생성자 관점에서 패키지 설치하기
---

| npm i 옵션 | 의미 | 단축 명령    |
|:---|:---:|---:|
| --save | 프로젝트를 실행할 때 필요한 패키지로 설치 | -S |
| --save-dev | 프로젝트를 개발할 때만 필요한 패키지로 설치 | -D |

<br>


- typescript와 ts-node 패키지 설치
``` bash
npm i -D typescript ts-node 
```
- 타입 라이브러리는 `@type/` 가 앞에 붙는다
```bash
npm i -D @types/node
```
- 다른 사람이 작성한 프로젝트를 받을 때
```bash
npm i # package.json 파일이 있는 디렉토리에서 실행
```

<br><br><br>
#### tsconfig.json 파일 만들기
---

타입스크립트 컴파일러 설정 파일: tsconfig.json
```bash
tsc --init
```
- tsconfig.json 설정
``` json
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es5",
        "moduleResolution": "node",
        "outDir": "dirt",
        "baseUrl": ".",
        "sourceMap": true,
        "downlevelInteration": true,
        "noImplicitAny": false,
        "path": { "*": ["node_modeules/*"] }
    },
    "include": ["src/**/*"] // ./src와 ./src/utils 디렉토리에 이 프로젝트이 모든 타입스크립트 소스 파일이 있다는 뜻
}
```
<br><br>
#### src 디렉토리와 소스 파일 만들기
---
- tsconfig.json 설정대로src/utils 디렉토리 생성
```bash
mkdir -p src/utils
touch src/index.ts src/utils/makePerson.ts
```
__경로주의__

![image](https://user-images.githubusercontent.com/102013100/182127916-7008788e-a857-428b-badf-689de3c2a20c.png)




```ts
// makePerson.ts
export function makePerson(name: string, age: number) {
    return {name: name, age: age}
}
export function testMakePerson() {
    console.log(
        makePerson('Jane', 22),
        makePerson('Jack', 33)
    )
}
```
```ts
// index.ts
import { testMakePerson } from "./utils/makePerson";
testMakePerson()
```

**시작 소스 파일명을 index로 짓는 이유**

    파일명을 생략하고 단순히 ts-node ./src로 실행할 수  있기 때문이다
<br><br><br>
#### package.json 수정
---

- dev: 개발중 src 디렉토리에 있는 index.ts 파일을 실행하는 용도
- build: 개발이 완료된 후 프로그램을 배포하기 위해 dist 디렉토리에 ES5 자바스크립트 파일을 만들 때 사용
```ts
{
  "name": "ch02_1",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {                      // 이부분 수정됨
    "dev" : "ts-node src",
    "build" : "tsc && node dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^18.6.3",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  }
}
```

- 명령사용: 'npm run 명령' 형태
```bash
npm run dev
ts-node src
# 실행 결과
# > ch02_1@1.0.0 dev
# > ts-node src
# { name: 'Jane', age: 22 } { name: 'Jack', age: 33 }

npm run build
# 실행 결과
# > ch02_1@1.0.0 build
# > tsc && node dirt
# { name: 'Jane', age: 22 } { name: 'Jack', age: 33 }
```

