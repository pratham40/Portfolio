import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar justify-between md:items-center bg-black text-white p-4">
      <span className="navbar-start text-xl tracking-wide">Portfolio</span>
      <ul className={`navbar-end ${menuOpen ? "block" : "hidden"} text-center md:flex gap-6  `}>
        <li className="md:inline-block  ">
          <a href="#about">
            <button className="btn-md translate-all duration-300 hover:text-lg hover:text-red-400">About</button>
          </a>
        </li>
        <li className=" md:inline-block">
          <a href="#Experiences">
            <button className="btn-md translate-all duration-300 hover:text-lg hover:text-red-400">Experiences</button>
          </a>
        </li>
        <li className="md:inline-block">
          <a href="#Project">
            <button className="btn-md translate-all duration-300 hover:text-lg hover:text-red-400">Project</button>
          </a>
        </li>
        <li className="md:inline-block">
          <a href="#Contact">
            <button className="btn-md translate-all duration-300 hover:text-lg hover:text-red-400">Contact</button>
          </a>
        </li>
      </ul>
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <RiCloseLine size={30}   /> : <RiMenu2Line size={30} />}
      </button>
    </div>
  );
}

export default NavBar;
