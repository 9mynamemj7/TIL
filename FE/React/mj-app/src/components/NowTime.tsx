import { useEffect, useState } from 'react'
import { removeCookie } from '../utils/cookie';


const NowTime = () => {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    async function timeSleep() {
      await setTimeout(()=>{setCount(count + 1)}, 1000)
    }
    timeSleep()
  },[count])

  const countRestTime = (time: number): string|number[] => {
    let restTime = 600 - time
    if (restTime < 0) {
      return "만료"
    } else {
      return [Math.floor(restTime/60), restTime%60]
    }
  }

  const timer = (time: string|number[]): string => {
    if (typeof time === "string") {
      removeCookie('token')
      return "로그인 만료"
    } else if (typeof time === "object") {
      return `만료 시간까지 ${time[0]}분 ${time[1]}초`
    }
    return ""
  }
  return (
    <div>
      {timer(countRestTime(count))}
    </div>
  )
}

export default NowTime