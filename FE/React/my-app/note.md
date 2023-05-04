#### 내가 무엇을 알고있을까
---
1. components

    리액트는 컴포넌트를 이용해 화면을 구성한다. 이 예시에서는 컴포넌트를 파일로 나누지 않고 React.Component를 확장시킨 클래스를 이용한것으로 보인다.

2. props

    props는 매개변수로 쓰인다. 예시에서 
    ```js
    constructor(props) {
        super(props);
    }
    ```
    이렇게 정의를 해서 다른 클래스에서도 정의 한 props를 매개변수로 받는다.

    이후에 setState를 이용하여 props의 상태를 바꿔주는것같다.
3. render

    render는 화면에 직접적으로 보이는걸 위해 쓰는데 html처럼 쓰고 
    ```js
    <div>
        <Board />
    </div>
    ```
    이런식으로 어떤 컴포넌트를 불러올지도 정하는것같다 그래서인지 새로고침할 때 마다 Board의 props가 새로 정의되는것으로 보인다.


#### 내가 무엇을 모를까
---
1. squares

    squares는 props의 state중 하나인데 Array(9).fill(null) 이라고 초기화되어있는 상태였다. 그런데 이후에 squares[i]라는 식으로 사용을 하는데 그렇다면 배열이겠다라는 생각을 하다가
    ```js
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        });
    }
    ```
    를 보고나니까 slice는 배열의 복사본인데 OR논리연산자를 사용한다? 이게 맞나?

2. this

    이 this가 정확히 무엇을 뜻하는지 궁금해서 검색을 해 봤지만 이해가 잘 되지는 않는다 어디서 사용하냐에 따라 global일수도 해당 컴포넌트? 일수도 있다고 본거같다 그걸 고정하기위해 arrow function을 사용한다 정도는 기억난다. 이 틱택토에서는 사실상 props를 뜻하는것같은데 맞나? 아니면 따로 의미하는게 있나?
3. calculateWinner 함수

    왜 얘만 파일 최하단(
    [승자결정하기부분](https://ko.legacy.reactjs.org/tutorial/tutorial.html#storing-a-history-of-moves)
    )에 두라고 하는걸까? import 바로 아래에 둬도 똑같이 작동하는거같은데... 차이가 있나?

4. return

    함수마다 return은 가지고있는데 handleClick 함수에서는 if 안에서만 return이 있다. else로 안해줘도 괜찮나? 안해줘도 되면 다른함수들도 안써도 괜찮지않을까
    
    또, return뒤에 오는것들이 값을 반환하는게 아니라 어떤 기능만 수행하고 끝나는것인가?
5. Square

    ```js
    function Square(props) {
    return (
        <button
        className="square"
        onClick={props.onClick}>
            {props.value}
        </button>
    );
    }
    ```
    ```js
    renderSquare(i) {
        return(
        <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
        );
    }
    ```
    이 Square라는건 같은친구같은데 매개변수는..? renderSquare의 value는 어디로 가는거지?
6. 전체적으로

    호이스팅이라는게 있어서 그렇다고 생각은 드는데 매개변수라던지 함수명이라던지 언제 정의가 되었고 사용될 때 변수의 상태등을 파악하기 어지럽다. 코드가 어떤 순서로 진행되는지 헷갈리는데 어떻게 추적해야할까