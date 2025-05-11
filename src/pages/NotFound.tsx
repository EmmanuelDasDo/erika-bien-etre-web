
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-erika-offwhite">
        <div className="text-center px-4">
          <h1 className="text-4xl font-playfair mb-4 text-gray-800">Page non trouvée</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button 
            className="bg-erika-peach hover:bg-erika-peach/90 text-white"
            asChild
          >
            <a href="/">Retourner à l'accueil</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
