
import React from 'react';
import { Building, Users, Home } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Building,
      value: "6",
      label: "Entreprises accompagnées",
      color: "from-amber-100 to-amber-200"
    },
    {
      icon: Home,
      value: "13",
      label: "EHPAD accompagnés",
      color: "from-orange-100 to-orange-200"
    },
    {
      icon: Users,
      value: "70+",
      label: "Personnes accompagnées",
      color: "from-rose-100 to-rose-200"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 curved-underline inline-block">En chiffres</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br flex flex-col items-center justify-center p-8 rounded-lg shadow-md text-center"
              style={{ background: `linear-gradient(135deg, ${index === 0 ? '#f4dca4' : index === 1 ? '#f0d0a8' : '#eca37c'}10, ${index === 0 ? '#f4dca4' : index === 1 ? '#f0d0a8' : '#eca37c'}30)` }}
            >
              <stat.icon className="w-12 h-12 text-erika-peach mb-4" />
              <span className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</span>
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
