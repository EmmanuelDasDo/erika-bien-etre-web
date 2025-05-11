
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Erika Coach de Vie</h3>
            <p className="text-gray-300 mb-4">
              Accompagnement personnalisé pour votre développement personnel et professionnel à Caen et à distance.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="bg-gray-700 p-2 rounded-full hover:bg-erika-peach transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="bg-gray-700 p-2 rounded-full hover:bg-erika-peach transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="bg-gray-700 p-2 rounded-full hover:bg-erika-peach transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/coaching-personnel" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Coaching Personnel
                </Link>
              </li>
              <li>
                <Link to="/coaching-professionnel" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Coaching Professionnel
                </Link>
              </li>
              <li>
                <Link to="/coaching-en-ligne" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Coaching En Ligne
                </Link>
              </li>
              <li>
                <Link to="/bilan-competences" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Bilan de Compétences
                </Link>
              </li>
              <li>
                <Link to="/prestations-bien-etre" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Prestations Bien-être
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-erika-peach transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-erika-peach transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                <span className="text-gray-300">Caen et ses environs, Normandie</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                <a href="mailto:contact@erikacoachdevie.fr" className="text-gray-300 hover:text-erika-peach transition-colors">
                  contact@erikacoachdevie.fr
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                <a href="tel:+33612345678" className="text-gray-300 hover:text-erika-peach transition-colors">
                  06 XX XX XX XX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Erika Coach de Vie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
