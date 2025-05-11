
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-erika-offwhite to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEMwIDAgMjM1LjUgODAwIDQwMCA4MDBDNTY0LjUgODAwIDgwMCA0MDAgODAwIDQwMEw4MDAgMEwwIDBaIiBmaWxsPSIjZjRkY2E0IiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-no-repeat bg-right-top opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6">
            <span className="block">Coaching</span>
            <span className="block text-erika-peach">de Vie</span>
            <span className="block">Personnalisé</span>
          </h1>
          <p className="text-lg max-w-md mb-8">
            Évoluez vers votre potentiel avec un accompagnement 
            bienveillant et professionnel à Caen et à distance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base" asChild>
              <Link to="/contact">Réserver une séance</Link>
            </Button>
            <Button variant="outline" className="border-erika-peach text-erika-peach hover:bg-erika-peach/10 px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base" asChild>
              <Link to="/a-propos">En savoir plus</Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -left-10 w-3/4 h-3/4 bg-erika-beige rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-3/4 h-3/4 bg-erika-sand rounded-full opacity-20"></div>
          <div className="relative z-10 rounded-full overflow-hidden shadow-2xl border-8 border-white w-[400px] h-[400px] mx-auto">
            <img 
              src="/lovable-uploads/2a19d89a-b659-41df-8333-e81ed94d74f6.png" 
              alt="Erika Coach de Vie" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
