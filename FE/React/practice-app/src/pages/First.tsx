import React, { useEffect, useState } from 'react';

// const user = {
//   firstName : 'Rose',
//   lastName : 'Taylor'
// };

// const element = <h1>Hello, {user.firstName} {user.lastName}</h1>;

const First = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const qustn = setInterval(()=>{
      if (count) {
        setCount(count + 1);
      }
    }, 1000);
  }, [count]);

  return (
    <div>
      <h2>
        {count}
      </h2>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  );
};


export default First;