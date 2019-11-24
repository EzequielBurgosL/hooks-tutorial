import React, { useState } from 'react'

import './Example1.scss'

export default function MultipleStates() {
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
      <h1 className="counter-title">MultipleStates</h1>
      <h2>Distance: {num} %</h2>
      <div className="btn_box">
        <button className="btn" onClick={() => setNumber(num + 25)}>increment</button>
        <button className="btn" onClick={() => {
          setNumber(0)
          setRotateY(0);
          setRotateX(0);
          setFade(false)
          setScale(false);
        }}>reset</button>
      </div>

      <div className="counter-toast counter-toast_1" onClick={() => setRotateY(!rotateY)}>
        <h2>rotate Y</h2>
      </div>
      <div className="counter-toast counter-toast_2" onClick={() => setFade(!fade)}>
        <h2>fade</h2>
      </div>
      <div className="counter-toast counter-toast_3" onClick={() => setScale(!scale)}>
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
            transform: 
              rotateY(${rotateY ? 180 : 0}deg)
              rotateX(${rotateX ? 180 : 0}deg)
              scale(${scale ? 1.1 : 1});
          }
          .rotateX{
            transform: 
              rotateY(${rotateY ? 180 : 0}deg)
              rotateX(${rotateX ? 180 : 0}deg) 
              scale(${scale ? 1.1 : 1});
          }
          .fade{
            opacity: ${fade ? 0 : 1};
          }
          .scale{
            transform:
              rotateY(${rotateY ? 180 : 0}deg)
              rotateX(${rotateX ? 180 : 0}deg)
              scale(${scale ? 1.1 : 1});
          }
        `}
      </style>
    </div>
  )
}

// import React, { useState } from 'react'

// import './Example1.scss'

// const INITIAL_STATE = {
//   num: 0,
//   rotateX: 0,
//   rotateY: 0,
//   fade: false,
//   scale: false 
// }

// export default function MultipleStates() {
//   const [{ num, rotateX, rotateY, fade, scale }, setState] = useState(INITIAL_STATE);

//   const updateState = (key = '', value) => {
//     if (key === 'reset') return setState(INITIAL_STATE);

//     return setState(prev => ({ ...prev, [key]: value }));
//   };

//   return (
//     <div className={`counter 
//       ${rotateY ? 'rotateY' : ''} 
//       ${rotateX ? 'rotateX' : ''}
//       ${fade ? 'fade' : ''}
//       ${scale ? 'scale' : ''}
//       `}
//     >
//       <h1 className="counter-title">distance</h1>
//       <h2>{num} %</h2>
//       <div className="btn_box">
//         <button className="btn" onClick={() => updateState('num', num + 25)}>increment</button>
//         <button className="btn" onClick={() => updateState('reset')}>reset</button>
//       </div>

//       <div className="counter-toast counter-toast_1" onClick={() => updateState('rotateY', !rotateY)}>
//         <h2>rotate Y</h2>
//       </div>
//       <div className="counter-toast counter-toast_2" onClick={() => updateState('fade', !fade)}>
//         <h2>fade</h2>
//       </div>
//       <div className="counter-toast counter-toast_3" onClick={() => updateState('scale', !scale)}>
//         <h2>scale</h2>
//       </div>
//       <div className="counter-toast counter-toast_4" onClick={() => updateState('rotateX', !rotateX)}>
//         <h2>rotate X</h2>
//       </div>

//       <style>
//         {`
//           .counter-toast_1{
//             bottom: 25rem;
//             left: ${50 - (num)}%;
//             transform: translateX(-50%);
//           }
//           .counter-toast_2{
//             top: ${50 - num}%;
//             transform: translateY(-50%);
//             left: 45rem;
//           }
//           .counter-toast_3{
//             top: 25rem;
//             right: ${50 - (num)}%;
//             transform: translateX(50%);
//           }
//           .counter-toast_4{
//             bottom: ${50 - num}%;
//             transform: translateY(50%);
//             right: 45rem;
//           }

//           .rotateY{
//             transform: rotateY(${rotateY ? 180 : 0}deg);
//           }
//           .rotateX{
//             transform: rotateX(${rotateX ? 180 : 0}deg);
//           }
//           .fade{
//             opacity: ${fade ? 0 : 1};
//           }
//           .scale{
//             transform: scale(${scale ? 1.1 : 1});
//           }
//         `}
//       </style>
//     </div>
//   )
// }

