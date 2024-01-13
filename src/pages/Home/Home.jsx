import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import arrow from "../../assets/icons/flecha.png";
import headerImg from "../../assets/images/header.jpg";
import doneIcon from "../../assets/icons/done.png";

const Home = () => {
  return (
    <main className=" bg-primary text-white ">
      <Navigation />
      <header className="w-full p-20 h-[700px] flex justify-between">
        <div className="w-full h-full pb-16 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="uppercase text-[4rem] font-bold">curso online</h1>
            <h2 className="uppercase text-[1.75rem]">fullstack developer</h2>
            <p className="w-[600px]">
              Estudia remoto desde cualquier lugar del mundo ! El futuro es hoy,
              te brindamos un curso para que puedas aprender la tecnologia que
              toda empresa busca !
            </p>
          </div>
          <div className="w-full flex justify-between items-center pr-10">
            <Link className="bg-white text-center px-6 py-2 text-black rounded font-bold">
              Más información
            </Link>
            <img src={arrow} alt="arrow image" />
          </div>
        </div>
        <img className="h-full" src={headerImg} alt="person using a computer" />
      </header>
      <section className="flex flex-col gap-32 items-center text-center pb-32">
        <h3 className="font-bold text-[1.75rem] w-4/12">
          La pérdida de tiempo es una epidemia. Estamos acá para erradicarla.
        </h3>
        <article className="flex justify-center">
          <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
            <img className="w-20" src={doneIcon} alt="done icon" />
            <h4 className="text-[1.5rem] uppercase font-bold">CLASES ONLINE</h4>
            <p className="text-[1.5rem] uppercase">
              CADA CURSO TENDRA SU PROFESOR ASIGNADO CON SUS HORARIOS
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
            <img className="w-20" src={doneIcon} alt="done icon" />
            <h4 className="text-[1.5rem] uppercase font-bold">
              MATERIAL EXCLUSIVO
            </h4>
            <p className="text-[1.5rem] uppercase">
              DISPONEMOS EL MATERIAL NECESARIO PARA TU APRENDIZAJE
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
            <img className="w-20" src={doneIcon} alt="done icon" />
            <h4 className="text-[1.5rem] uppercase font-bold">
              PRECIOS ACCESIBLES
            </h4>
            <p className="text-[1.5rem] uppercase">
              METODOS DE PAGO MENSUALES A UN BAJO COSTO
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
