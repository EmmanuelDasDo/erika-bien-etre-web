
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/4726b17e-90c0-47c8-a35e-ba34e3712137.png" 
              alt="Erika Coach de Vie" 
              className="h-16 mb-4"
            />
            <p className="text-gray-600 max-w-xs">
              Coach professionnelle certifiée, je vous accompagne dans votre développement personnel et professionnel.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/coaching-personnel" className="text-gray-600 hover:text-erika-peach transition-colors">Coaching Personnel</Link></li>
              <li><Link to="/coaching-professionnel" className="text-gray-600 hover:text-erika-peach transition-colors">Coaching Professionnel</Link></li>
              <li><Link to="/coaching-en-ligne" className="text-gray-600 hover:text-erika-peach transition-colors">Coaching en Ligne</Link></li>
              <li><Link to="/bilan-competences" className="text-gray-600 hover:text-erika-peach transition-colors">Bilan de Compétences</Link></li>
              <li><Link to="/bien-etre" className="text-gray-600 hover:text-erika-peach transition-colors">Prestations Bien-être</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/a-propos" className="text-gray-600 hover:text-erika-peach transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-erika-peach transition-colors">Contact</Link></li>
              <li><Link to="/mentions-legales" className="text-gray-600 hover:text-erika-peach transition-colors">Mentions Légales</Link></li>
              <li><Link to="/politique-confidentialite" className="text-gray-600 hover:text-erika-peach transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Erika Coach de Vie. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              {/* Social media links can be added here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
