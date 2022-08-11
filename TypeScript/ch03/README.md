### 객체와 타입
</br>

#### 03-1 타입스크립트 변수 선언문

> 자바스크립트와 타입스크립트의 기본 타입

|유형|자바스크립트 타입|타입스크립트 타입|
|:---:|:---:|:---:|
|수 타입|Number|number|
|불리안 타입|Boolean|boolean|
|문자열 타입|String|string|
|객체 타입|Object|object|
</br>

> let과 const 키워드

```
// ESNext 자바스크립트에서 let 키워드로 변수 선언
let 변수 이름 [=초깃값]

// const로 변수선언
const 변수 이름 = 초깃값
```
```
// 타입스크립트에서 타입명시 - 타입 주석
let 변수 이름: 타입 [= 초깃값]
const 변수 이름: 타입 = 초깃값
```
> 타입스크립트 타입 계층도

![image](https://user-images.githubusercontent.com/102013100/182919582-fdfe0948-ca92-437b-bb2c-b8419a04ba72.png)

> 템플릿 문자열

타입스크립트에는 변수에 담긴 값을 조합해 문자열을 만들 수 있게 하는 `템플릿 문자열`을 제공
```
`${변수 이름}`
```
```ts
// 예시
let count = 10, message = 'your count'
let result = `${message} is ${count}`
console.log(result)     // your count is 10
```

#### 03-2 객체와 인터페이스
</br>

> 인터페이스 선언문

타입스크립트는 객체의 타입을 정의할 수 있게 하는 interface라는 키워드를 제공한다.
```
interface 인터페이스 이름 {
    속성 이름[?]: 속성 타입[,...]
}
```
```ts
// 예시
interface IPerson {
    name: string
    age: number
}
```

> 선택 속성 구문

인터페이스 설계에서 어떤 속성은 반드시 있어야 하지만, 어떤 속성은 있어도 되고 없어도 되는 형태로 만들고 싶을 때 `선택 속성`
```ts
interface IPerson2 {
    name: string
    age: number
    etc?: boolean   // 선택속성
}
```

> 익명 인터페이스
```ts
// 예시
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}

function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
          `${me.name} ${me.age} ${me.etc}` :
          `${me.name} ${me.age}`
    )
}
printMe(ai)     // Jack 32
```

#### 03-3 객체와 클래스

> 클래스 선언문

```
class 클래스 이름 {
    [private | protected | public] 속성 이름[?]: 속성 타입[...]
}
```
```ts
class Person1 {
    name?: string
    age?: number
}
let jack1 : Person1 = new Person1()
jack1.name = 'Jack' ; jack1.age = 32
console.log(jack1)  // Person1 { name: 'Jack', age: 32}
```
> 생성자

타입스크립트는 `생성자(constructor)`라는 메서드를 포함한다
```ts
class Person2 {
    constructor(public name: string, public age?: number) {}
}
let jack2 : Person2 = new Person2('Jack', 32)
console.log(jack2)  //Person2 { name: 'Jack', age: 32}
```
</br>
타입스크립트는 생성자의 매개변수에 public과 같은 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다

```ts
class Person3 {
    name: string
    age?: number
    constructor(name: string, age?: number) {
        this.name = name; this.age = age
    }
}
let jack3 : Person3 = new Person3('Jack', 32)
console.log(jack3)
```
</br>

> 인터페이스 구현

타입스크립트 클래스는 인터페이스를 구현할 수 있다 -> implements 사용

```md
Class __클래스 이름__ implements __인터페이스 이름__ {
    
}

```

인터페이스는 속성이 있어야 한다는 규약(spec)에 불과할 뿐 물리적으로 해당 속성을 만들지 않는다. 따라서 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다.
```ts
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    name: string
    age: number
}
```
응용
```ts
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    constructor(public name: string, public age?: number) {}
}
let jack4: Iperson4 = new Person4('Jack', 32)
console.log(jack4)      // Person4 { name: 'Jack', age: 32 }
```
</br>

> 추상 클래스

`abstract` 키워드를 사용해 추상 클래스를 만들 수 있다. 추상 클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다

```text
abstract class 클래스 이름 {
    abstract 속성 이름: 속성 타입
    abstract 메서드 이름() {}
}
```

추상 클래스 예
```ts
abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}
```

> 클래스의 상속

`extends` 키워드를 사용
```text
class 상속 클래스 extends 부모 클래스 {···}
```

AbstractPerson5 추상클래스를 상속 -> name 속성 구현
```ts
class Person5 extends APerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}
let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5)      // Person5 { name: 'Jack', age: 32 }
```
</br>

> static 속성

```text
class 클래스 이름 {
    static 정적 속성 이름: 속성 타입
}
```
예시
```ts
calss A {
    static initValue = 1
}

let initVal = A.initValue       // 1
```
</br>
</br>
</br>

#### 03-4 객체의 비구조화 할당문

