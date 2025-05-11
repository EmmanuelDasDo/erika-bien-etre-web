
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, Compass, Award } from 'lucide-react';

const BilanCompetences = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Bilan de Compétences
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Faites le point sur votre parcours, identifiez vos talents et construisez un projet professionnel qui vous ressemble.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Qu'est-ce qu'un bilan de compétences ?</h2>
              <p className="mb-4">
                Le bilan de compétences est une démarche encadrée qui vous permet d'analyser vos compétences 
                professionnelles et personnelles, vos aptitudes et motivations afin de définir un projet 
                professionnel cohérent et/ou un projet de formation.
              </p>
              <p className="mb-4">
                Cette démarche vous offre l'opportunité de faire le point sur votre parcours, d'identifier 
                vos atouts et axes d'amélioration, et d'envisager votre avenir professionnel avec plus de 
                clarté et de confiance.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Pour qui et pourquoi ?</h2>
              <p className="mb-4">
                Le bilan de compétences s'adresse à toute personne souhaitant :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Faire le point sur son parcours professionnel</li>
                <li>Clarifier ses aspirations et sa situation professionnelle</li>
                <li>Préparer une reconversion ou une évolution de carrière</li>
                <li>Valider un projet professionnel ou de formation</li>
                <li>Identifier ses compétences transférables vers un nouveau secteur</li>
                <li>Retrouver motivation et sens dans sa vie professionnelle</li>
                <li>Se repositionner après une période d'interruption (congé parental, maladie...)</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Les étapes du bilan de compétences</h2>
              <div className="space-y-6 mt-6">
                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair mb-2">Phase préliminaire</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Analyse de votre demande et de vos besoins</li>
                      <li>Information sur les conditions de déroulement du bilan</li>
                      <li>Définition conjointe des modalités de l'accompagnement</li>
                      <li>Validation de votre engagement dans la démarche</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair mb-2">Phase d'investigation</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Analyse de votre parcours personnel et professionnel</li>
                      <li>Identification de vos compétences, aptitudes et motivations</li>
                      <li>Exploration de vos valeurs et centres d'intérêt</li>
                      <li>Découverte de nouvelles perspectives professionnelles</li>
                      <li>Recherche d'informations sur les métiers et formations envisagés</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair mb-2">Phase de conclusion</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Identification des facteurs favorisant la réalisation de votre projet</li>
                      <li>Établissement d'un plan d'action détaillé</li>
                      <li>Rédaction d'une synthèse personnalisée</li>
                      <li>Entretien de suivi à 6 mois pour faire le point sur l'avancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Les bénéfices du bilan de compétences</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                    <h3 className="text-lg font-playfair">Clarté et confiance</h3>
                  </div>
                  <p className="text-gray-700">
                    Obtenez une vision claire de vos atouts et de vos aspirations pour avancer 
                    avec plus de confiance dans vos choix professionnels.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <Compass className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                    <h3 className="text-lg font-playfair">Orientation précise</h3>
                  </div>
                  <p className="text-gray-700">
                    Définissez un projet professionnel réaliste et adapté à vos compétences, 
                    votre personnalité et le marché du travail.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <Award className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                    <h3 className="text-lg font-playfair">Valorisation</h3>
                  </div>
                  <p className="text-gray-700">
                    Identifiez et mettez en valeur vos compétences transférables et vos réalisations 
                    pour mieux vous positionner.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <FileText className="w-5 h-5 text-erika-peach mr-2 mt-1" />
                    <h3 className="text-lg font-playfair">Plan d'action concret</h3>
                  </div>
                  <p className="text-gray-700">
                    Repartez avec une feuille de route détaillée et des étapes concrètes 
                    pour réaliser votre projet professionnel.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Modalités pratiques</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Durée :</strong> Le bilan s'étend sur 8 à 12 semaines avec un total de 24 heures 
                  comprenant des entretiens individuels, des tests et du travail personnel.
                </li>
                <li>
                  <strong>Lieu :</strong> En présentiel à Caen ou à distance via visioconférence.
                </li>
                <li>
                  <strong>Financement :</strong> Plusieurs options sont possibles (CPF, plan de développement 
                  des compétences de l'entreprise, financement personnel...).
                </li>
                <li>
                  <strong>Confidentialité :</strong> Toutes les informations échangées durant le bilan 
                  restent strictement confidentielles.
                </li>
              </ul>
              <p>
                Le bilan de compétences est encadré par les articles L. 6313-1, L. 6313-10 et R. 6322-32 à R. 6322-50 
                du Code du travail.
              </p>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Prêt(e) à faire le point sur votre carrière ?</h2>
              <p className="mb-6">
                Contactez-moi pour un premier échange gratuit et sans engagement sur votre situation 
                et vos aspirations professionnelles.
              </p>
              <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full text-base">
                Demander des informations
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BilanCompetences;
