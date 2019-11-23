import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Navbar.scss'

export default function Navbar() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="navbar">
      <ul>
        <li className={`navbar-links ${selected === 0 && 'navbar-links-selected'}`} onClick={() => setSelected(0)}>
          <h2><Link to="/">Home</Link></h2>
        </li>
        <li className={`navbar-links ${selected === 1 && 'navbar-links-selected'}`} onClick={() => setSelected(1)}>
          <h2><Link to="/example1">useState</Link></h2>
        </li>
        <li className={`navbar-links ${selected === 2 && 'navbar-links-selected'}`} onClick={() => setSelected(2)}>
          <h2><Link to="/example2">Example2</Link></h2>
        </li>
      </ul>
    </div>
  );
}
