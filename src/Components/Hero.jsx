import { TypewriterEffect } from "../Components/ui/typewriter-effect";
import '../styles/others.css'
import { Link } from "react-scroll";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Consultoría",
      className:"text-gray-100"
    },
    
    {
      text: "IT",
      className: "text-[#800000]",
    },
  ];
  return (
    (<section className="flex gap-6 flex-col items-center justify-center h-screen ">
      <TypewriterEffect words={words} />
      <div className="flex items-center text-center w-full max-w-[430px] md:max-w-[580px] mt-10 text-white">
        <p className="text-1xl sm:text-[18px]">Entregamos valor siendo partners en el desarrollo de herramientas para tu negocio con soluciones a medida en Cibeseguridad, redes e infraestructura</p>
      </div>

      <div
        className="flex  flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <Link
                to="contacto"
                smooth={true}
                duration={500}
                >
        <button
          className="button1 w-40 outline hover:outline-none outline-[#80000063] outlo h-10 rounded-xl border hover:text-gray-400  text-white white text-sm">
          Consultar
        </button>
        </Link>
      </div>
    </section>)
  );
}
