import { HoverEffect } from "../Components/ui/card-hover-effect";
import { Code, Activity, Shield, Coffee, Cloud, Phone } from "lucide-react";

export function CardHoverEffectDemo() {
    return (
        (<section className="w-full h-fit max-w-[900px] m-auto">
            <div className='items-center m-auto text-center flex flex-col justify-center mb-10 gap-12'>
                <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8000003b] to-red-400 bg-opacity-50">Nuestros <span className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff56] to-white bg-opacity-50 px-3 rounded-sm'>Servicios</span></h2>
                <div className="flex items-center text-center w-full max-w-[410px]">
                <p className="text-gray-300 text-1xl">Soluciones tecnológicas a medida. Seguridad y cumplimiento garantizados.</p>
                </div>
            </div>
            <HoverEffect items={projects} />
        </section>)
    );
}

export const projects = [
    {
        icon: <Code className="w-8 h-8 text-red-500" />,
        title: "Desarrollo",
        description:
            "Nuestros expertos diseñan infraestructuras optimizadas para un rendimiento máximo.",
        link: "https://stripe.com",
    },
    {
        icon: <Shield className="w-8 h-8 text-red-500" />,
        title: "Seguridad",
        description:
            "Te protegemos de las últimas amenazas cibernéticas, permitiéndote operar con tranquilidad.",
        link: "https://netflix.com",
    },
    {
        icon: <Activity className="w-8 h-8 text-red-500" />,
        title: "Monitoreo",
        description:
            "Monitoreamos tu infraestructura para mantenerla segura y con buen rendimiento.",
        link: "https://google.com",
    },
    {
        icon: <Coffee className="w-8 h-8 text-red-500" />,
        title: "Automatización",
        description:
            "Aumenta la productividad con nuestra solución de automatización impulsada por IA.",
        link: "https://meta.com",
    },
    {
        icon: <Cloud className="w-8 h-8 text-red-500" />,
        title: "Cloud",
        description:
            "Trabaja desde cualquier lugar con nuestra solución en la nube.",
        link: "https://amazon.com",
    },
    {
        icon: <Phone className="w-8 h-8 text-red-500" />,
        title: "Soporte",
        description:
            "Soporte técnico personalizado para resolver cualquier problema.",
        link: "https://microsoft.com",
    },
];