
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Video, FileText, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Coaching Personnel",
      description: "Accompagnement pour votre développement personnel, estime de soi et équilibre de vie.",
      route: "/coaching-personnel",
      color: "from-amber-100 to-amber-200"
    },
    {
      icon: Briefcase,
      title: "Coaching Professionnel",
      description: "Solutions pour votre évolution de carrière, leadership et gestion du stress professionnel.",
      route: "/coaching-professionnel",
      color: "from-orange-100 to-orange-200"
    },
    {
      icon: Video,
      title: "Coaching en Ligne",
      description: "Séances à distance, flexibles et adaptées à votre emploi du temps, où que vous soyez.",
      route: "/coaching-en-ligne",
      color: "from-rose-100 to-rose-200"
    },
    {
      icon: FileText,
      title: "Bilan de Compétences",
      description: "Évaluation approfondie de vos compétences pour définir un projet professionnel cohérent.",
      route: "/bilan-competences",
      color: "from-indigo-100 to-indigo-200"
    },
    {
      icon: Leaf,
      title: "Prestations Bien-être",
      description: "Techniques de relaxation et outils pour retrouver harmonie entre corps et esprit.",
      route: "/bien-etre",
      color: "from-emerald-100 to-emerald-200"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">Mes Services</h2>
          <p className="text-gray-700">
            Découvrez mes différentes prestations de coaching adaptées à vos besoins spécifiques, 
            en présentiel à Caen ou à distance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${service.color} p-6`}>
                <service.icon className="w-10 h-10 text-gray-700 mb-4" />
                <h3 className="text-xl font-playfair mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="p-4 bg-white">
                <Button 
                  variant="link" 
                  className="text-erika-peach hover:text-erika-peach/80 p-0"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base">
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
