import React, { useState } from 'react';

import {
  Link,
} from 'react-router-dom';
import NavPanel from './NavPanel';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="flex flex-col items-center">
      <NavPanel visible={menuVisible} />
      <div className="flex p-4 fixed z-10 bg-slate-100 mt-8 w-[90vw] rounded-md justify-evenly">
        <div className="w-[55%] flex justify-between">
          {menuVisible ? <span onClick={() => setMenuVisible(false)}><i className="fa-solid fa-x hover:cursor-pointer" /></span> : <span onClick={() => setMenuVisible(true)}><i className="text-2xl fa-solid fa-bars hover:cursor-pointer" /></span>}
          <h1 className="font-elanor text-2xl"><Link to="/">Ayurhealth</Link></h1>
        </div>
        <ul className="w-[45%] flex justify-end items-center">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li className="ml-2">
            <Link to="/calculator">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
