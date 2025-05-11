
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Target, Users } from 'lucide-react';

const CoachingProfessionnel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Coaching Professionnel
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Un accompagnement personnalisé pour les professionnels et les entreprises souhaitant développer leur potentiel.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Le coaching professionnel et d'entreprise</h2>
              <p className="mb-4">
                Le coaching professionnel est une démarche d'accompagnement qui vise à optimiser le potentiel 
                et les performances des individus, des équipes ou des organisations. Cette approche structurée 
                se concentre sur des objectifs précis et mesurables dans un contexte professionnel.
              </p>
              <p className="mb-4">
                Que vous soyez un dirigeant souhaitant améliorer votre leadership, un manager cherchant 
                à développer votre équipe, ou un collaborateur en quête d'évolution, le coaching professionnel 
                vous offre un espace de réflexion et d'action pour atteindre vos objectifs.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Les domaines d'intervention</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair mb-3">Coaching individuel</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Développement du leadership et des compétences managériales</li>
                    <li>Gestion du stress et prévention du burn-out</li>
                    <li>Préparation aux entretiens et négociations importantes</li>
                    <li>Accompagnement à la prise de poste et aux transitions professionnelles</li>
                    <li>Gestion des conflits et amélioration des relations professionnelles</li>
                    <li>Équilibre vie professionnelle et personnelle</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair mb-3">Coaching d'équipe et d'organisation</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Renforcement de la cohésion d'équipe</li>
                    <li>Amélioration de la communication interne</li>
                    <li>Gestion du changement et des transformations</li>
                    <li>Développement de l'intelligence collective</li>
                    <li>Résolution de conflits et médiation</li>
                    <li>Définition et alignement sur des objectifs communs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Méthodologie et approche</h2>
              <p className="mb-4">
                Mon approche du coaching professionnel combine rigueur méthodologique et adaptation 
                à chaque contexte spécifique. Je m'appuie sur des modèles éprouvés et des outils 
                pratiques pour accompagner mes clients vers leurs objectifs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach text-center">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2">Analyse et objectifs</h3>
                  <p className="text-gray-700">
                    Diagnostic précis de la situation et définition d'objectifs mesurables et motivants.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach text-center">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2">Accompagnement</h3>
                  <p className="text-gray-700">
                    Sessions structurées avec outils et méthodes adaptés à chaque problématique.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erika-peach text-center">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair mb-2">Résultats durables</h3>
                  <p className="text-gray-700">
                    Mise en place de plans d'actions concrets et développement d'autonomie.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Les bénéfices pour l'entreprise</h2>
              <ul className="list-disc pl-5 space-y-3 mb-6">
                <li>
                  <strong>Amélioration des performances :</strong> Développement des compétences et de l'efficacité 
                  des collaborateurs et des équipes.
                </li>
                <li>
                  <strong>Meilleur climat social :</strong> Renforcement de la communication et prévention des 
                  conflits interpersonnels.
                </li>
                <li>
                  <strong>Fidélisation des talents :</strong> Investissement dans le développement personnel 
                  et professionnel des collaborateurs.
                </li>
                <li>
                  <strong>Accompagnement du changement :</strong> Facilitation des transitions et des transformations 
                  organisationnelles.
                </li>
                <li>
                  <strong>Prévention des risques psychosociaux :</strong> Outils de gestion du stress et amélioration 
                  du bien-être au travail.
                </li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Modalités pratiques</h2>
              <p className="mb-4">
                Chaque intervention est personnalisée en fonction de vos besoins spécifiques. Je propose :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Un entretien préliminaire pour définir vos objectifs et le cadre de l'intervention</li>
                <li>Des forfaits adaptés à la durée et à la nature de l'accompagnement</li>
                <li>Des séances en présentiel à Caen ou dans vos locaux</li>
                <li>Des séances à distance via visioconférence</li>
                <li>Un suivi entre les séances pour maximiser les résultats</li>
              </ul>
              <p>
                Je travaille dans le respect de la confidentialité et de l'éthique professionnelle, garantissant 
                un espace sécurisé pour explorer les défis professionnels.
              </p>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Discutons de votre projet</h2>
              <p className="mb-6">
                Chaque entreprise a des besoins uniques. Contactez-moi pour échanger sur votre situation 
                et découvrir comment le coaching professionnel peut contribuer à votre réussite.
              </p>
              <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full text-base">
                Demander un devis
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachingProfessionnel;
