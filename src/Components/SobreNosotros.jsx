import React from "react";
import { FlipWords } from "../Components/ui/flip-words";
import { DropdownButtons } from "./dropdown-buttons";

export function FlipWordsDemo() {
    const words = ["Innovadoras", "Seguras", "Eficientes", "Escalables", "Personalizadas"];

    return (
        (<section className="h-screen w-full gap-14 bg-gradient-to-b from-[#0A0909] to-[rgba(167,81,81,0.13)] flex flex-col justify-center items-center px-4">
            <div>
            <h2 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8000003b] to-red-400 bg-opacity-50">Sobre <span className='text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff56] to-white bg-opacity-50 px-3 rounded-sm'>Nosotros</span></h2>
            </div>
            <div className="text-4xl  mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <div className="flex tracking-tight w-full max-w-[900px] flex-col items-center justify-center text-center">
                        <div className=" md:flex m-auto  items-center text-center mb-8">
                        <p className="text-[20px text-center]">Desarrollamos soluciones </p>
                        <div className="pt-3 flex items-center justify-center">
                        <p className="flex pb-4 pt-[1px] px-2 text-center">
                            <FlipWords words={words}/>
                        </p>
                        </div>
                        </div>
                    <p className="text-[20px] md:flex hidden">que se adaptan perfectamente a las necesidades únicas de cada cliente. Al enfocarnos en segmentos emergentes y medianos, les brindamos las herramientas que necesitan para competir y crecer en un mercado cada vez más competitivo.</p>
                </div>
            </div>
            <DropdownButtons/>
        </section>)
    );
}
