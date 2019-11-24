import React, { useState, useRef, useEffect } from "react";

import './UseRefExample.scss';

const App = () => {
  const [email, setEmail] = useState('')
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [dataDisplay, setDataDisplay] = useState(true);

  return (
    <div className="useRefApp">
      <>
        <div className="useRefApp-focus">
          <button
            className="btn"
            onClick={() => {
              inputRef.current.focus();
              hello.current();
            }}
          >
            focus input
          </button>
          <input
            ref={inputRef}
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/* this unmounts hello component */}
        <button
          className="btn" 
          onClick={() => setDataDisplay(!dataDisplay)}
        >toggle component</button>
        {dataDisplay && <DataDisplay />}
      </>
    </div>
  );
};

export default App;

const DataDisplay = () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div className="data_display">
      <div>
        <p>{loading ? "loading data..." : data}</p>
      </div>
      <button 
        className="btn" 
        // this triggers rendering:
        onClick={() => setCount(c => c + 1)}
      >increment: {count}</button>
    </div>
  );
};


const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount:
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          // this avoids setState after component is unmounted:
          if (isCurrent.current) { 
            // console.log('setState: ');
            setState({ data: y, loading: false });
          }
        }, 2000);
      });
  }, [url, setState]);

  return state;
};