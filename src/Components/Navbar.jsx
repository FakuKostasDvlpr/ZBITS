import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Cambiar a true para que esté visible al inicio
  const [lastScrollPos, setLastScrollPos] = useState(0);

  // Función para controlar la apertura y cierre del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efecto para detectar la dirección del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Detectar si el usuario está haciendo scroll hacia arriba o hacia abajo
      if (currentScrollPos < lastScrollPos) {
        // Scroll hacia arriba
        setIsScrollingUp(true);
      } else {
        // Scroll hacia abajo
        setIsScrollingUp(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700`}
    >
      <div className="max-w-screen-xl mt-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block cursor-pointer md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex md:bg-transparent bg-[#0f0f0f] gap-3 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block cursor-pointer py-2 px-3 text-white bg-[#800000] text-[18px] border-b rounded md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent"
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block px-3 cursor-pointer py-2 md:px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:bg-[#800000] md:hover:text-gray-200"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="nosotros"
                smooth={true}
                duration={500}
                className="block px-3 cursor-pointer py-2 md:px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:bg-[#800000] md:hover:text-gray-200"
                onClick={closeMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                smooth={true}
                duration={500}
                className="block px-3 cursor-pointer py-2 md:px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:bg-[#800000] md:hover:text-gray-200"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
