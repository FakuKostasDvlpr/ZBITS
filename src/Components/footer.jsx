export function FooterJsx() {
  return (
    (<footer className=" h-fit mt-40 bg-gradient-to-b from-[#0A0909] to-[rgba(3,1,1,0)] flex flex-col justify-center items-center px-4 text-gray-200">
      <div className="container mx-auto px-40 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-red-500">ZBIT</h2>
            <p className="text-gray-500">@2014-@2024</p>
            <div>
              <p className="text-sm">
                Servicios integrales en tecnología y despliegue de soluciones de ambientes profesionales de alta disponibilidad bajo estándares internacionales.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-red-500">
                <span className="sr-only">Facebook</span>
                <span className="w-5 h-5 inline-block">FB</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <span className="sr-only">Twitter</span>
                <span className="w-5 h-5 inline-block">TW</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <span className="sr-only">LinkedIn</span>
                <span className="w-5 h-5 inline-block">IN</span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Servicios</h3>
            <ul className="space-y-2">
              {['Soporte', 'Infraestructura', 'Redes', 'Seguridad', 'Desarrollo', 'Webhosting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Empresa</h3>
            <ul className="space-y-2">
              {['Sobre nosotros', 'Carreras', 'Blog', 'Contáctanos'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de interés */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Enlaces de interés</h3>
            <ul className="space-y-2">
              {['Subtel', 'LACNIC', 'Ministerio de transportes y telecomunicaciones'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>)
  );
}