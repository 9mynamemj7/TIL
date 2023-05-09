import React, { useEffect, useState } from 'react'


const First = () => {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    async function timeSleep() {
      await setTimeout(()=>{setCount(count + 1)}, 1000)
    }
    timeSleep()
  },[count])
  return (
    <div>
      <p>{count} 초 {Date()}</p>
    </div>
  )
}

export default First