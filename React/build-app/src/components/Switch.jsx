import React, { useState } from 'react';

const Switch = () => {
  const [bgColor, setBgColor] = useState("white");
  const practiceSwitch = (value) => {
    let color;

    switch (value) {
      case ("RED"):
        color = 'red';
        break;
      case ("BLUE"):
        color = 'blue';
        break;
      case ("WHITE"):
        color = 'white';
        break;
    }
    setBgColor(color);
    console.log(color);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%' }}>
      <div style={{ backgroundColor: bgColor, width: '10rem', height: '10rem' }}>
      </div>
      <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
        <li>
          <button onClick={() => {practiceSwitch("RED")}}>
          빨강
          </button>
        </li>
        <li>
          <button onClick={() => {practiceSwitch("BLUE")}}>
          파랑
          </button>
        </li>
        <li>
          <button onClick={() => {practiceSwitch("WHITE")}}>
          하양
          </button>
        </li>
      </ul>

      
    </div>
  )
}

export default Switch