
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Star, ArrowRight } from 'lucide-react';

const CoachingPersonnel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Coaching Personnel
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Un accompagnement sur-mesure pour vous aider à réaliser vos objectifs et retrouver sérénité et confiance.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Qu'est-ce que le coaching personnel ?</h2>
              <p className="mb-4">
                Le coaching personnel est un accompagnement visant à vous aider à atteindre vos objectifs, 
                qu'ils soient d'ordre personnel, relationnel ou lié à votre développement. Il s'agit d'un 
                partenariat entre le coach et le coaché pour permettre à ce dernier de prendre conscience 
                de ses ressources et de les mobiliser pour atteindre ses buts.
              </p>
              <p className="mb-4">
                Cette démarche vise à développer l'autonomie de la personne et à l'amener vers plus de 
                clarté concernant sa situation actuelle et ses aspirations. Par un questionnement précis 
                et des outils adaptés, le coach vous guide vers vos propres solutions.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Pour quelles situations ?</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Manque de confiance en soi et d'estime de soi</li>
                <li>Sentiment d'être perdu, en quête de sens</li>
                <li>Difficultés relationnelles (couple, famille, amis)</li>
                <li>Gestion des émotions (stress, anxiété, colère)</li>
                <li>Prise de décision importante</li>
                <li>Changement de vie (déménagement, reconversion)</li>
                <li>Équilibre vie personnelle et professionnelle</li>
                <li>Réalisation d'un projet personnel</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Comment se déroule un coaching personnel ?</h2>
              <p className="mb-4">
                Chaque accompagnement est unique et adapté à vos besoins spécifiques. Cependant, le processus 
                suit généralement ces étapes :
              </p>
              <ol className="list-decimal pl-5 space-y-4 mb-6">
                <li>
                  <strong>Premier contact :</strong> Un échange téléphonique gratuit de 20 minutes pour faire 
                  connaissance et déterminer si le coaching est adapté à votre situation.
                </li>
                <li>
                  <strong>Séance découverte :</strong> Une première séance pour définir clairement votre objectif,
                  explorer votre situation actuelle et établir un plan d'action.
                </li>
                <li>
                  <strong>Séances de coaching :</strong> Des sessions régulières (généralement toutes les 2 semaines)
                  pour travailler sur vos objectifs, explorer les obstacles et mettre en place des actions concrètes.
                </li>
                <li>
                  <strong>Suivi et ajustement :</strong> Entre les séances, des exercices pratiques et une 
                  disponibilité par e-mail pour répondre à vos questions.
                </li>
                <li>
                  <strong>Séance de clôture :</strong> Un bilan de votre progression et des outils acquis pour 
                  poursuivre votre développement en autonomie.
                </li>
              </ol>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Les bénéfices du coaching personnel</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2 text-center">Confiance et Clarté</h3>
                  <p className="text-gray-700 text-center">
                    Retrouvez confiance en vous et clarifiez vos priorités pour avancer sereinement.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2 text-center">Épanouissement</h3>
                  <p className="text-gray-700 text-center">
                    Développez votre plein potentiel et créez une vie plus alignée avec vos valeurs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2 text-center">Autonomie</h3>
                  <p className="text-gray-700 text-center">
                    Acquérez des outils et méthodes durables pour continuer à progresser par vous-même.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Prêt(e) à commencer votre voyage ?</h2>
              <p className="mb-6">
                Chaque parcours commence par une première étape. Contactez-moi pour échanger sur vos besoins
                et découvrir comment le coaching personnel peut vous aider à atteindre vos objectifs.
              </p>
              <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full text-base">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachingPersonnel;
