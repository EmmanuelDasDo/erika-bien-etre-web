
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Reconversion professionnelle",
      content: "Erika m'a accompagnée dans ma reconversion professionnelle avec bienveillance et professionnalisme. Ses conseils m'ont permis de faire les bons choix et de reprendre confiance en moi.",
      rating: 5
    },
    {
      name: "Thomas B.",
      role: "Dirigeant d'entreprise",
      content: "Un coaching efficace qui m'a aidé à mieux gérer mon stress et à développer mon leadership. Je recommande vivement les services d'Erika à tous les professionnels.",
      rating: 5
    },
    {
      name: "Sophie M.",
      role: "Développement personnel",
      content: "Les séances de coaching avec Erika m'ont apporté des outils concrets pour améliorer mon quotidien. Son écoute et sa méthode sont remarquables.",
      rating: 5
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">Témoignages</h2>
          <p className="text-gray-700">
            Ce que mes clients disent de mon accompagnement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-medium text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
