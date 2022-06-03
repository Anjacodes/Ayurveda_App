import {
  Link,
} from 'react-router-dom';

const Navbar = () => (
  <nav className="flex p-4 fixed bg-slate-100 mt-8 w-[90vw] rounded-md justify-evenly opacity-80">
    <div className="w-[55%] flex justify-between">
      <i className="text-2xl fa-solid fa-bars" />
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
  </nav>
);

export default Navbar;
