import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import arrow from "../../assets/icons/flecha.png";
import headerImg from "../../assets/images/header.jpg";
import doneIcon from "../../assets/icons/done.png";

const Home = () => {
  return (
    <div className="font-roboto bg-primary text-white">
      <Navigation />
      <main className="w-11/12 m-auto">
        <header className="w-full h-[700px] pt-28 flex justify-between">
          <div className="w-full h-full pb-16 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <h1 className="uppercase text-[2.5rem] lg:text-[4rem] font-bold font-poppins">
                curso online
              </h1>
              <span className="uppercase text-[1.5rem] lg:text-[1.75rem]">
                fullstack developer
              </span>
              <p className="">
                Estudia remoto desde cualquier lugar del mundo ! El futuro es
                hoy, te brindamos un curso para que puedas aprender la
                tecnologia que toda empresa busca !
              </p>
            </div>
            <div className="w-full flex flex-col-reverse items-center lg:justify-between lg:pr-10">
              <Link className="bg-white text-center px-6 py-2 text-black rounded font-bold">
                Más información
              </Link>
              <img src={arrow} alt="arrow image" />
            </div>
          </div>
          <img
            className="hidden h-full"
            src={headerImg}
            alt="person using a computer"
          />
        </header>
        <section className="flex flex-col gap-32 items-center text-center pb-32">
          <h2 className="font-poppins font-bold text-[1.75rem] w-4/12">
            La pérdida de tiempo es una epidemia. Estamos acá para erradicarla.
          </h2>
          <article className="flex justify-center flex-col gap-2 lg:flex-row">
            <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
              <img className="w-20" src={doneIcon} alt="done icon" />
              <h4 className="text-[1.5rem] uppercase font-bold font-poppins">
                CLASES ONLINE
              </h4>
              <p className="text-[1.5rem]">
                CADA CURSO TENDRA SU PROFESOR ASIGNADO CON SUS HORARIOS
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
              <img className="w-20" src={doneIcon} alt="done icon" />
              <h4 className="text-[1.5rem] uppercase font-bold font-poppins">
                MATERIAL EXCLUSIVO
              </h4>
              <p className="text-[1.5rem] uppercase">
                DISPONEMOS EL MATERIAL NECESARIO PARA TU APRENDIZAJE
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2 w-80 items-center text-center">
              <img className="w-20" src={doneIcon} alt="done icon" />
              <h4 className="text-[1.5rem] uppercase font-bold font-poppins">
                PRECIOS ACCESIBLES
              </h4>
              <p className="text-[1.5rem] uppercase">
                METODOS DE PAGO MENSUALES A UN BAJO COSTO
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
