import React, { useState } from 'react'

import './Example1.scss'

export default function Counter() {
  const [num, setNumber] = useState(0)
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [fade, setFade] = useState(false);
  const [scale, setScale] = useState(false);

  return (
    <div className={`counter 
      ${rotateY ? 'rotateY' : ''} 
      ${rotateX ? 'rotateX' : ''}
      ${fade ? 'fade' : ''}
      ${scale ? 'scale' : ''}
      `}
    >
      <h1 className="counter-title">entropy</h1>
      <h2>{num} %</h2>
      <div className="btn_box">
        <button className="btn" onClick={() => setNumber(num + 25)}>increment</button>
        <button className="btn" onClick={() => {
          setNumber(0)
          setRotateY(0);
          setRotateX(0);
          setFade(false)
          setScale(false)
        }}>reset</button>
      </div>

      <div className="counter-toast counter-toast_1" onClick={() => setRotateY(!rotateY)}>
        <h2>rotate Y</h2>
      </div>
      <div className="counter-toast counter-toast_2" onClick={() => setFade(true)}>
        <h2>fade</h2>
      </div>
      <div className="counter-toast counter-toast_3" onClick={() => setScale(true)}>
        <h2>scale</h2>
      </div>
      <div className="counter-toast counter-toast_4" onClick={() => setRotateX(!rotateX)}>
        <h2>rotate X</h2>
      </div>
      <style>
        {`
          .counter-toast_1{
            bottom: 25rem;
            left: ${50 - (num)}%;
            transform: translateX(-50%);
          }
          .counter-toast_2{
            top: ${50 - num}%;
            transform: translateY(-50%);
            left: 45rem;
          }
          .counter-toast_3{
            top: 25rem;
            right: ${50 - (num)}%;
            transform: translateX(50%);
          }
          .counter-toast_4{
            bottom: ${50 - num}%;
            transform: translateY(50%);
            right: 45rem;
          }

          .rotateY{
            transform: rotateY(${rotateY ? 180 : 0}deg);
          }
          .rotateX{
            transform: rotateX(${rotateX ? 180 : 0}deg);
          }
          .fade{
            opacity: ${fade ? 0 : 1};
          }
          .scale{
            transform: scale(${scale ? 1.1 : 1});
          }
        `}
      </style>
    </div>
  )
}
