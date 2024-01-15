import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-entero-blanco.png";

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="fixed w-full flex justify-between items-center p-6 bg-primary">
      <img className="h-12" src={logo} alt="Logo de Instituto Faraday" />
      <button
        className={`p-2 relative flex flex-col justify-center gap-[4px] md:hidden`}
        onClick={() => setActive(!active)}
      >
        <div
          className={`w-5 h-[2px] bg-white rounded-sm ${
            active ? "rotate-45 absolute" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-[2px] bg-white rounded-sm ${
            active ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-[2px] bg-white rounded-sm ${
            active ? "rotate-[-45deg]" : ""
          }`}
        ></div>
      </button>
      <ul
        className={`h-screen w-full opacity-0 fixed left-full duration-300 ease-in md:static top bg-primary text-white top-24 flex flex-col justify-center items-center gap-20 md:gap-12 md:flex-row md:h-auto md:p-0 md:justify-end md:opacity-100
          ${active ? "opacity-100 left-0 duration-300 ease-in" : " "}
        `}
      >
        <li className="" onClick={() => setActive(false)}>
          <Link
            className={`uppercase ${
              window.location.pathname === "/" && "font-semibold"
            }`}
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li className="" onClick={() => setActive(false)}>
          <Link
            className={`uppercase ${
              window.location.pathname === "/about" && "font-semibold"
            }`}
            to="/about"
          >
            Sobre Nosotros
          </Link>
        </li>
        <li className="" onClick={() => setActive(false)}>
          <Link
            className={`uppercase ${
              window.location.pathname === "/contact" && "font-semibold"
            }`}
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
