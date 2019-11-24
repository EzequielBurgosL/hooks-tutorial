import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Navbar.scss'

const pages = [
  '',
 'useState',
 'useState2',
 'useEffect',
 'useRef',
 'useReducer',
 'useContext',
 'useImperativeHandle'
];

export default function Navbar() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const path = window.location.pathname.split("/").pop()
    const current = pages.findIndex(el => el === path);
    setSelected(current);
  }, [])

  return (
    <div className="navbar">
      <ul>
        {pages.map((el, index) => {
          return (
            <li 
              key={el}
              className={`navbar-links ${selected === index && 'selected'}`} 
              onClick={() => setSelected(index)}
            >
            {el
              ? <h3><Link to={`/${el}`}>{el}</Link></h3> 
              : <h3><Link to="/">Home</Link></h3>}
            </li>
          );
        })}
      </ul>
    </div>
  )
}
