import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-entero-blanco.png"


const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-primary">
      <img className="h-20" src={logo} alt="Logo de Instituto Faraday" />
      <button
        className={`p-2 relative flex flex-col justify-center gap-[4px] lg:hidden`}
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
        className={`h-full text-white w-full absolute top-10 left-0 px-6 py-16 flex flex-col gap-6 lg:relative lg:w-auto lg:top-0 lg:flex lg:flex-row lg:py-2 ${
          active ? "" : "hidden"
        }`}
      >
        <li>
          <Link
            className={`uppercase ${window.location.pathname === "/" && "font-semibold"}`}
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className={`uppercase ${
              window.location.pathname === "/about" && "font-semibold"
            }`}
            to="/about"
          >
            Sobre Nosotros
          </Link>
        </li>
        <li>
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
