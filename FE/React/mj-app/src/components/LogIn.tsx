import React, { useState } from 'react'

export const LogIn = () => {
  
  // ID 부분
  const [userName, setUserName] = useState("");
  const [submitedName, setSubmitedName] = useState("")

  const onIdChange = (event:React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value)
  };

  // PW 부분
  const [userPassword, setUserPassword] = useState("");
  const [submitedPassword, setSubmitedPassword] = useState("")

  const onPwChange = (event:React.FormEvent<HTMLInputElement>) => {
    setUserPassword(event.currentTarget.value)
  };

  // 버튼 클릭 후 변수 저장
  const onIdSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitedName(userName)
    setSubmitedPassword(userPassword)
  };

  // Return
  return (
    <div>
      <form onSubmit={onIdSubmit}>
        <input
          value={userName}
          onChange={onIdChange}
          type="text"
          placeholder="이름"
        />
        <input
        value={userPassword}
        onChange={onPwChange}
        type="password"
        placeholder="이름"
        />
        <button>로그인</button>
      </form>

      
      <div>{submitedName} {submitedPassword}</div>
    </div>
  );
}
