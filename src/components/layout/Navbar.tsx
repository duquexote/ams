import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Quem Somos', path: '/sobre' },
  { name: 'Equipe', path: '/equipe' },
  {
    name: 'Áreas de Atuação',
    path: '/areas-de-atuacao',
    dropdown: true,
    submenu: [
      { name: 'Direito Médico', path: '/areas-de-atuacao/direito-medico' },
      { name: 'Direito da Saúde', path: '/areas-de-atuacao/direito-da-saude' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Publicações', path: '/publicacoes' },
  { name: 'Contato', path: '/contato' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="relative">
                {link.dropdown ? (
                  <div className="group relative">
                    <button
                      className="flex items-center py-2 text-neutral-800 hover:text-primary-700"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className="absolute left-0 z-10 w-64 mt-2 origin-top-left bg-white border border-neutral-200 divide-y divide-neutral-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {link.submenu?.map((sublink) => (
                        <NavLink
                          key={sublink.name}
                          to={sublink.path}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-sm ${
                              isActive
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                            }`
                          }
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive
                          ? 'text-primary-700 font-medium'
                          : 'text-neutral-800 hover:text-primary-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contato" className="hidden lg:inline-flex btn btn-primary">
          Fale com um especialista
        </Link>

        {/* Mobile Navigation Toggle */}
        <button
          className="p-2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-neutral-900" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative flex flex-col w-full max-w-xs p-4 overflow-y-auto bg-white">
            <nav className="flex-1 mt-5">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    {link.dropdown ? (
                      <div>
                        <button
                          className="flex items-center w-full py-2 pl-3 pr-4 text-base font-medium text-neutral-800"
                          onClick={() => toggleDropdown(index)}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 ml-auto transition-transform ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeDropdown === index && (
                          <ul className="pl-6 mt-2 space-y-2">
                            {link.submenu?.map((sublink) => (
                              <li key={sublink.name}>
                                <NavLink
                                  to={sublink.path}
                                  className={({ isActive }) =>
                                    `block py-2 pl-3 pr-4 text-base ${
                                      isActive
                                        ? 'text-primary-700 font-medium'
                                        : 'text-neutral-700 hover:text-primary-700'
                                    }`
                                  }
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sublink.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block py-2 pl-3 pr-4 text-base ${
                            isActive
                              ? 'text-primary-700 font-medium'
                              : 'text-neutral-800 hover:text-primary-700'
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  to="/contato"
                  className="w-full btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Fale com um especialista
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;