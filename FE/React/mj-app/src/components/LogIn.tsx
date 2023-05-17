import React, { useState } from 'react'

const LogIn = () => {
  
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
  const onIdSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitedName(userName);
    setSubmitedPassword(userPassword);

    // 요청 보내기
    const response = await fetch('http://121.190.105.94:3001/login', {
      method: 'POST',
      body: JSON.stringify({ 
        'name': userName,
        'password': userPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // 응답 처리
    if (response.ok) {
      // 응답 처리 성공
      console.log("ok")
    } else {
      // 에러 처리
      console.log('Error:', response.status);
    }
  }

  // Return
  return (
    <div>
      <form method="post" onSubmit={onIdSubmit}>
        <input
          value={userName}
          onChange={onIdChange}
          type="text"
          placeholder="아이디"
        />
        <input
        value={userPassword}
        onChange={onPwChange}
        type="password"
        placeholder="비밀번호"
        />
        <button type='submit'>로그인</button>
      </form>
      <div>{submitedName} {submitedPassword}</div>
    </div>
  );
}

export default LogIn;
