
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Video, Clock, Globe, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CoachingEnLigne = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Coaching En Ligne
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Un accompagnement à distance aussi efficace que le présentiel, mais avec plus de flexibilité.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Le coaching à distance : proximité sans contraintes</h2>
              <p className="mb-4">
                Le coaching en ligne vous permet de bénéficier d'un accompagnement professionnel de qualité, 
                quel que soit votre emplacement géographique. À travers des séances en visioconférence, 
                nous travaillons ensemble sur vos objectifs avec la même efficacité qu'en présentiel.
              </p>
              <p className="mb-4">
                Cette modalité vous offre une grande flexibilité tout en préservant la qualité de la relation 
                coach-coaché, essentielle à la réussite de votre démarche. Les outils numériques utilisés 
                garantissent des échanges fluides et confidentiels.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-playfair mb-6 text-center">Les avantages du coaching en ligne</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair">Flexibilité horaire</h3>
                    </div>
                    <p className="text-gray-700">
                      Planifiez vos séances selon vos disponibilités, sans contrainte de déplacement. 
                      Idéal pour les agendas chargés et les horaires atypiques.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair">Sans contrainte géographique</h3>
                    </div>
                    <p className="text-gray-700">
                      Bénéficiez d'un accompagnement de qualité où que vous soyez, en France ou à l'étranger, 
                      sans limites territoriales.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair">Confort et intimité</h3>
                    </div>
                    <p className="text-gray-700">
                      Participez aux séances depuis votre environnement familier, en toute tranquillité 
                      et dans un cadre qui vous met à l'aise.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair">Continuité du suivi</h3>
                    </div>
                    <p className="text-gray-700">
                      Maintenez la régularité de votre accompagnement malgré vos déplacements 
                      professionnels ou personnels.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Comment se déroule un coaching en ligne ?</h2>
              <p className="mb-4">
                Le coaching à distance suit le même processus qu'un coaching en présentiel, avec quelques 
                spécificités liées à l'utilisation des outils numériques :
              </p>
              <ol className="list-decimal pl-5 space-y-4 mb-6">
                <li>
                  <strong>Prise de contact initiale :</strong> Un échange téléphonique gratuit de 20 minutes 
                  pour faire connaissance et évaluer si le coaching répond à vos besoins.
                </li>
                <li>
                  <strong>Préparation technique :</strong> Instructions simples pour vous connecter à la plateforme 
                  de visioconférence (Zoom, Teams, ou autre selon votre préférence).
                </li>
                <li>
                  <strong>Séance découverte :</strong> Un premier rendez-vous en ligne pour définir 
                  votre objectif et établir le cadre de notre collaboration.
                </li>
                <li>
                  <strong>Déroulement des séances :</strong> Des sessions de coaching interactives avec 
                  partage d'écran pour les outils visuels et les exercices.
                </li>
                <li>
                  <strong>Suivi entre les séances :</strong> Envoi de supports numériques, exercices 
                  et disponibilité par e-mail pour vos questions.
                </li>
              </ol>
              <p>
                Chaque séance dure environ 1h à 1h30 et se déroule dans les mêmes conditions de confidentialité 
                et d'écoute qu'en présentiel.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Prérequis techniques</h2>
              <p className="mb-4">
                Pour profiter pleinement de vos séances de coaching en ligne, vous aurez besoin :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>D'un ordinateur, tablette ou smartphone avec une connexion internet stable</li>
                <li>D'une webcam et d'un microphone (intégrés à la plupart des appareils récents)</li>
                <li>D'un espace calme où vous pourrez vous isoler pendant la durée de la séance</li>
                <li>Éventuellement d'écouteurs pour une meilleure qualité d'écoute</li>
              </ul>
              <p>
                Avant votre première séance, nous pouvons effectuer un test rapide pour vérifier 
                que tout fonctionne correctement.
              </p>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Un premier pas vers le changement</h2>
              <p className="mb-6">
                Où que vous soyez, le coaching en ligne vous permet de vous engager dans une démarche 
                de développement personnel ou professionnel avec flexibilité. Contactez-moi pour 
                découvrir comment cet accompagnement peut vous aider.
              </p>
              <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full text-base">
                Réserver une séance en ligne
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachingEnLigne;
