// hints.js
// Author: danju

// Real Time Clock

// const hints = {
//     useState : "상태 관리 훅",
//     useEffect : "컴포넌트 외부의 상태 관리 훅",
//     setInterval : "시간 간격마다 함수 실행!"
// }

import { useState, useEffect } from 'react'
const example = () => {
    let initialState = 0;
    const [state, setState] = useState(initialState);

    return (
        <div>
            <p>{`count: ${state}`}</p>
            <button onClick={()=>setState(state+1)}>+</button>
        </div>
    )
};

export default example;