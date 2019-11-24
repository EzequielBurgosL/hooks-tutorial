import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const Parent = () => {
  // In order to gain access to the child component instance,
  // you need to assign it to a `ref`, so we call `useRef()` to get one
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button className="btn" onClick={() => childRef.current.logSomething()}>Click</button>
    </div>
  );
};

export default Parent;

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const Child = forwardRef((props, ref) => {

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  const logToConsole = () => {
    console.log('logToConsole from child component!')
  }

  useImperativeHandle(ref, () => ({
    logSomething() {
      logToConsole();
    }
  }));

  return (
    <div>
      <p>hi, click and check the console!</p>
      <br />
    </div>
  );
});


