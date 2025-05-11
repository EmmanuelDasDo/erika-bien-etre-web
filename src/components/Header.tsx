
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Coaching Personnel', path: '/coaching-personnel' },
    { name: 'Coaching Professionnel', path: '/coaching-professionnel' },
    { name: 'Coaching en Ligne', path: '/coaching-en-ligne' },
    { name: 'Bilan de Compétences', path: '/bilan-competences' },
    { name: 'Prestations Bien-être', path: '/bien-etre' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full py-4 bg-erika-offwhite/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/4726b17e-90c0-47c8-a35e-ba34e3712137.png" 
              alt="Erika Coach de Vie" 
              className="h-16"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-gray-800 hover:text-erika-peach transition-colors duration-300 py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="block text-gray-800 hover:text-erika-peach transition-colors duration-300 py-2"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
