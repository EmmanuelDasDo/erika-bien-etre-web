
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Coaching individuel",
      price: "70 €",
      unit: "/ séance",
      description: "Séance personnalisée d'une heure",
      highlight: true
    },
    {
      title: "Coaching professionnel",
      price: "Sur devis",
      unit: "",
      description: "Adapté aux besoins des entreprises",
      highlight: false
    },
    {
      title: "Bilan de compétences",
      price: "1 290 €",
      unit: "",
      description: "Finançable CPF",
      highlight: true
    },
    {
      title: "Prestations bien-être",
      price: "60 €",
      unit: "/ séance",
      description: "Relaxation, visualisation (1h)",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">Tarifs</h2>
          <p className="text-gray-700">
            Des formules adaptées à vos besoins, avec des séances personnalisées
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${option.highlight ? 'border-erika-peach' : 'border-gray-200'}`}
            >
              <CardHeader className={`text-center py-6 ${option.highlight ? 'bg-erika-peach/10' : 'bg-gray-50'}`}>
                <CardTitle className="font-playfair">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl font-semibold">{option.price}</span>
                  <span className="text-sm text-gray-500 ml-1">{option.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button 
                  variant={option.highlight ? "default" : "outline"} 
                  className={option.highlight ? "bg-erika-peach hover:bg-erika-peach/90" : "border-erika-peach text-erika-peach hover:bg-erika-peach/10"}
                  asChild
                >
                  <Link to="/contact">Réserver</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
