import React, { useState } from "react";

function User() {
  const [userName, setUserName] = useState("");
  const [submitedName, setSubmitedName] = useState("")

  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value)
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitedName(userName)
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={userName}
          onChange={onChange}
          type="text"
          placeholder="이름"
        />
        <button>제출</button>
        <h2>Hi, {submitedName}! Nice to meet you</h2>
      </form>
    </div>
  );
}

export default User;