
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              À Propos de Moi
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Découvrez mon parcours, ma philosophie et mon approche du coaching de vie.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/lovable-uploads/2a19d89a-b659-41df-8333-e81ed94d74f6.png" 
                    alt="Erika Coach de Vie" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-playfair mb-4">Qui suis-je ?</h2>
                <p className="mb-4 text-gray-700">
                  Bonjour, je suis Erika, coach de vie professionnelle certifiée, passionnée par l'accompagnement 
                  des personnes dans leur chemin vers l'épanouissement personnel et professionnel.
                </p>
                <p className="mb-4 text-gray-700">
                  Formée aux techniques du coaching moderne, je mets à votre disposition mon expertise pour vous 
                  aider à clarifier vos objectifs, surmonter vos obstacles et révéler votre plein potentiel.
                </p>
                <p className="text-gray-700">
                  Au-delà de mes compétences techniques, c'est mon parcours de vie, jalonné d'expériences 
                  riches et variées, qui nourrit ma pratique et ma compréhension des défis que vous pouvez rencontrer.
                </p>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Mon parcours</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Formation et certification</h3>
                      <p className="text-gray-700">
                        Après un parcours professionnel diversifié qui m'a permis d'acquérir une solide expérience 
                        en relations humaines et en gestion d'équipe, j'ai choisi de me former au coaching pour 
                        approfondir ma passion pour l'accompagnement et le développement personnel. Certifiée 
                        par [Nom de l'organisme], j'ai également suivi des formations complémentaires en programmation 
                        neuro-linguistique (PNL), en communication non violente et en techniques de bien-être.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Valeurs et engagement</h3>
                      <p className="text-gray-700">
                        Ma pratique du coaching est profondément ancrée dans des valeurs de respect, d'authenticité et de bienveillance. 
                        Je crois fermement en votre capacité à trouver en vous les ressources nécessaires pour surmonter les obstacles 
                        et réaliser vos aspirations. Mon engagement est de créer un espace sécurisé et sans jugement où vous pourrez 
                        explorer librement vos pensées, vos émotions et vos ambitions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Expertise et approche</h3>
                      <p className="text-gray-700">
                        Je combine plusieurs approches et outils adaptés à chaque personne. Ma méthode s'appuie sur une écoute active, 
                        un questionnement puissant et des outils concrets que vous pourrez appliquer immédiatement dans votre quotidien. 
                        J'accorde une attention particulière à la dimension holistique de la personne, considérant que l'épanouissement 
                        passe par l'harmonie entre les différentes sphères de la vie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Ma philosophie du coaching</h2>
              <p className="mb-4 text-gray-700">
                Je considère le coaching comme un voyage transformateur que nous entreprenons ensemble. 
                Dans ce parcours :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                <li>
                  <strong>Vous êtes l'expert de votre vie</strong> — Mon rôle n'est pas de vous dire quoi faire, 
                  mais de vous aider à explorer vos options et à prendre des décisions alignées avec qui vous êtes.
                </li>
                <li>
                  <strong>Le changement vient de l'intérieur</strong> — Je vous accompagne pour accéder à 
                  vos propres ressources et solutions, car les plus durables sont celles que vous découvrez vous-même.
                </li>
                <li>
                  <strong>L'action est essentielle</strong> — Au-delà de la réflexion, j'encourage la mise en 
                  pratique concrète pour ancrer les apprentissages et créer de réels changements.
                </li>
                <li>
                  <strong>Le chemin est aussi important que la destination</strong> — Les prises de conscience 
                  et transformations qui se produisent pendant le processus ont autant de valeur que l'atteinte 
                  de l'objectif final.
                </li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Témoignages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="italic mb-4 text-gray-700">
                    "Le coaching avec Erika a été une véritable révélation pour moi. Sa bienveillance et 
                    son professionnalisme m'ont permis de reprendre confiance en moi et de clarifier mes objectifs 
                    professionnels. Je recommande vivement !"
                  </p>
                  <p className="font-medium">Marie L., 34 ans</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="italic mb-4 text-gray-700">
                    "Grâce à l'accompagnement d'Erika, j'ai pu prendre le recul nécessaire sur ma situation 
                    professionnelle et opérer une reconversion qui me correspond vraiment. Son écoute et ses 
                    outils m'ont été précieux dans cette période de transition."
                  </p>
                  <p className="font-medium">Thomas D., 42 ans</p>
                </div>
              </div>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Et si nous faisions connaissance ?</h2>
              <p className="mb-6">
                Je vous propose un premier échange téléphonique gratuit de 20 minutes pour discuter 
                de votre situation et voir comment je peux vous accompagner dans votre démarche.
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

export default About;
