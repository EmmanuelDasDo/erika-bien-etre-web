
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would typically connect to a backend for email sending
    toast({
      title: "Formulaire envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Contact
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Contactez-moi pour toute information ou pour prendre rendez-vous. Je vous répondrai dans les meilleurs délais.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-playfair mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-erika-peach mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Adresse</h3>
                      <p className="text-gray-700">
                        Cabinet situé à Caen et ses environs<br />
                        Normandie, France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-erika-peach mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:contact@erikacoachdevie.fr" className="hover:underline">
                          contact@erikacoachdevie.fr
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-erika-peach mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+33612345678" className="hover:underline">
                          06 XX XX XX XX
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-erika-peach mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Horaires</h3>
                      <p className="text-gray-700">
                        Du lundi au vendredi : 9h - 19h<br />
                        Samedi : Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-erika-beige/30 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair mb-3">Coaching à distance</h3>
                <p className="mb-4 text-gray-700">
                  Je propose également des séances en ligne via Zoom, Teams ou Skype, accessibles 
                  partout en France et à l'international.
                </p>
                <Button 
                  variant="outline" 
                  className="border-erika-peach text-erika-peach hover:bg-erika-peach/10"
                  asChild
                >
                  <a href="/coaching-en-ligne">En savoir plus</a>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-playfair mb-6">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="coaching-personnel">Coaching personnel</option>
                    <option value="coaching-professionnel">Coaching professionnel</option>
                    <option value="coaching-en-ligne">Coaching en ligne</option>
                    <option value="bilan-competences">Bilan de compétences</option>
                    <option value="prestations-bien-etre">Prestations bien-être</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-erika-peach focus:border-transparent"
                    placeholder="Comment puis-je vous aider ?"
                  />
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="privacy" required className="h-4 w-4 text-erika-peach rounded" />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    J'accepte que les informations saisies soient utilisées pour me recontacter dans le cadre de ma demande *
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-erika-peach hover:bg-erika-peach/90 text-white">
                  Envoyer
                </Button>
                
                <p className="text-xs text-gray-500">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
