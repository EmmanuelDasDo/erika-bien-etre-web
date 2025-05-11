
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="py-16 bg-erika-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">Contact</h2>
          <p className="text-gray-700">
            N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous. 
            Je vous répondrai dans les meilleurs délais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-playfair mb-6">Contactez-moi</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                />
              </div>
              
              <Button type="submit" className="w-full bg-erika-peach hover:bg-erika-peach/90 text-white" asChild>
                <Link to="/contact">Envoyer</Link>
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-playfair mb-4">Informations</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-erika-peach mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-gray-600">Caen et ses environs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-erika-peach mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contact@erikacoachdevie.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-erika-peach mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-gray-600">06 XX XX XX XX</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-erika-beige/30 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-playfair mb-2">Coaching à distance</h3>
              <p className="text-gray-700 mb-4">
                Je propose également des séances en ligne, partout en France et à l'international.
              </p>
              <Button variant="outline" className="border-erika-peach text-erika-peach hover:bg-erika-peach/10" asChild>
                <Link to="/coaching-en-ligne">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
