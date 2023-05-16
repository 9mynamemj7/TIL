import { useEffect, useState } from 'react'


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
      return "로그인 만료"
    } else if (typeof time === "object") {
      return `${time[0]}분 ${time[1]}초`
    }
    return ""
  }
  return (
    <div>
      <p>{timer(countRestTime(count))}</p>
    </div>
  )
}

export default NowTime