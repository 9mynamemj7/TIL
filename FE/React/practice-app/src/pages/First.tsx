import React, { useEffect, useState } from 'react'


const First = () => {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    setCount(count + 1)
  },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default First