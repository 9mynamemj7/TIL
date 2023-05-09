import React, { useState } from 'react'
export const initialState: number = 0;
const Example = () => {
    
    const [state, setState] = useState(initialState);

    return (
        <div>
            <p>{`count: ${state}`}</p>
            <button onClick={()=>setState(state+1)}>+</button>
            <button onClick={()=>setState(state-1)}>-</button>
        </div>
    )
};


export default Example;