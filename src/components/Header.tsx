import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/4726b17e-90c0-47c8-a35e-ba34e3712137.png" 
            alt="Erika Coach Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Accueil
          </Link>
          <Link to="/coaching-personnel" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Coaching Personnel
          </Link>
          <Link to="/coaching-professionnel" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Coaching Professionnel
          </Link>
          <Link to="/coaching-en-ligne" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Coaching En Ligne
          </Link>
          <Link to="/bilan-competences" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Bilan de Compétences
          </Link>
          <Link to="/prestations-bien-etre" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            Prestations Bien-être
          </Link>
          <Link to="/a-propos" className="text-gray-700 hover:text-erika-peach transition-colors text-sm whitespace-nowrap">
            À Propos
          </Link>
          <div className="flex items-center gap-2 mx-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-erika-peach transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-erika-peach transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white text-sm whitespace-nowrap" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/coaching-personnel" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Coaching Personnel
            </Link>
            <Link 
              to="/coaching-professionnel" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Coaching Professionnel
            </Link>
            <Link 
              to="/coaching-en-ligne" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Coaching En Ligne
            </Link>
            <Link 
              to="/bilan-competences" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Bilan de Compétences
            </Link>
            <Link 
              to="/prestations-bien-etre" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Prestations Bien-être
            </Link>
            <Link 
              to="/a-propos" 
              className="px-3 py-2 text-gray-700 hover:bg-erika-peach/10 hover:text-erika-peach rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className="px-3 py-2 bg-erika-peach text-white hover:bg-erika-peach/90 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 justify-center my-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-erika-peach transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-erika-peach transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
