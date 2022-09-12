### 함수와 메서드
</br>

#### 04-1 함수 선언문
---
```md
function 함수이름(매개변수1: 타입1, 매개변수2: 타입2) : 반환값 타입 {
    함수 몸통
}

예)
function add(a: number, b: number) : number {
    return a + b
}
```
```md
void타입
-> 값을 반환하지 않고 함수 반환 타입
function printMe(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`)
}

- 함수 시그니처
let printMe: (string, number) => void = function (name: string, age: number): void {}
```

</br></br>

#### 04-2 함수 표현식
---
```ts
let add = new Function('a','b', 'return a+b')
// 위의 변수 선언문 형태를 아래의 함수표현식(함수형 언어의 특징) 으로 표현 가능
let add = function(a, b) {return a+b}
```

**함수 표현식은 const로 선언하는것이 바람직하다**

</br></br>

#### 04-3 화살표 함수와 표현식 문
---
