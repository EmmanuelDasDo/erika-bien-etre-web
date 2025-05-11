
import React from 'react';
import { Heart, Target, Smile } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Écoute Bienveillante",
      description: "Un accompagnement basé sur l'écoute active, sans jugement, dans un espace de confiance."
    },
    {
      icon: Target,
      title: "Objectifs Concrets",
      description: "Des méthodes efficaces pour définir, clarifier et atteindre vos objectifs personnels et professionnels."
    },
    {
      icon: Smile,
      title: "Épanouissement",
      description: "Retrouvez confiance, sérénité et motivation pour vous réaliser pleinement dans tous les aspects de votre vie."
    }
  ];

  return (
    <section className="py-16 bg-erika-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">Mon Approche</h2>
          <p className="text-gray-700">
            En tant que coach de vie professionnelle, je vous accompagne dans votre cheminement personnel et
            professionnel avec bienveillance et méthode. Je crois profondément en votre capacité à réaliser votre
            potentiel et à surmonter les obstacles qui se dressent sur votre chemin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform border-t-4 border-erika-peach"
            >
              <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair mb-4 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
