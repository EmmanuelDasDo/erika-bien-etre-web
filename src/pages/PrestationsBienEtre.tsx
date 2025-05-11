
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Smile, BookOpen } from 'lucide-react';

const PrestationsBienEtre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-erika-offwhite py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 text-center curved-underline inline-block mx-auto">
              Prestations Bien-être
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700">
              Des outils complémentaires pour harmoniser corps et esprit dans votre cheminement personnel.
            </p>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Une approche holistique du bien-être</h2>
              <p className="mb-4">
                En complément de mes séances de coaching, je propose des prestations bien-être qui visent 
                à accompagner votre développement de façon globale. Ces outils permettent d'harmoniser 
                le corps et l'esprit, de mieux gérer vos émotions et de retrouver un équilibre intérieur.
              </p>
              <p className="mb-4">
                Ces pratiques, issues de techniques reconnues, s'intègrent parfaitement dans une démarche 
                de coaching pour renforcer votre capacité à vous recentrer, à vous détendre et à mobiliser 
                vos ressources intérieures.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-playfair mb-6 text-center">Mes prestations bien-être</h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair">Relaxation guidée</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Des séances de relaxation profonde pour apaiser votre mental et relâcher les tensions 
                    physiques. Ces techniques vous permettent de vous reconnecter à votre corps, de calmer 
                    votre esprit et d'apprendre à vous détendre en toutes circonstances.
                  </p>
                  <p className="text-gray-700">
                    <strong>Bienfaits :</strong> Réduction du stress, meilleure gestion des émotions, amélioration 
                    du sommeil, augmentation de la concentration et de la clarté mentale.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair">Méditation pleine conscience</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Apprenez à porter votre attention sur l'instant présent, sans jugement, pour développer 
                    une plus grande conscience de vous-même et de votre environnement. Ces pratiques vous aident 
                    à cultiver une présence attentive dans votre quotidien.
                  </p>
                  <p className="text-gray-700">
                    <strong>Bienfaits :</strong> Diminution de l'anxiété, meilleure régulation émotionnelle, 
                    développement de la bienveillance envers soi-même, renforcement de la résilience.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Smile className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair">Cohérence cardiaque</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Une technique respiratoire simple et efficace qui permet de réguler votre rythme cardiaque 
                    et d'harmoniser votre système nerveux. Facilement applicable au quotidien, cette pratique 
                    vous offre un outil puissant pour gérer le stress dans l'instant.
                  </p>
                  <p className="text-gray-700">
                    <strong>Bienfaits :</strong> Équilibrage du système nerveux, réduction du cortisol (hormone du stress), 
                    amélioration de la concentration et de la prise de décision, renforcement du système immunitaire.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-erika-beige to-erika-peach w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair">Ateliers d'expression créative</h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Des ateliers qui utilisent différents supports d'expression (écriture, dessin, collage...) 
                    pour explorer vos émotions, vos aspirations et votre créativité. Ces espaces de liberté 
                    vous permettent d'accéder à vos ressources intérieures de façon ludique et intuitive.
                  </p>
                  <p className="text-gray-700">
                    <strong>Bienfaits :</strong> Libération émotionnelle, développement de la créativité, 
                    exploration de soi de façon non verbale, accès à l'inconscient, plaisir et légèreté.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-playfair mb-4">Comment intégrer ces pratiques dans votre parcours</h2>
              <p className="mb-4">
                Ces prestations bien-être peuvent être proposées :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>En complément de vos séances de coaching :</strong> pour renforcer le travail 
                  sur certaines problématiques (gestion du stress, confiance en soi, etc.).
                </li>
                <li>
                  <strong>Sous forme de séances individuelles dédiées :</strong> centrées uniquement 
                  sur une pratique spécifique selon vos besoins.
                </li>
                <li>
                  <strong>En ateliers collectifs :</strong> pour partager l'expérience en petit groupe 
                  et bénéficier de la dynamique collective.
                </li>
                <li>
                  <strong>En entreprise :</strong> pour des interventions ponctuelles ou régulières 
                  axées sur la prévention du stress et le bien-être au travail.
                </li>
              </ul>
              <p>
                Chaque prestation est adaptée à vos besoins spécifiques et peut être modulée 
                selon vos objectifs personnels ou professionnels.
              </p>
            </div>
            
            <div className="bg-erika-beige/30 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-playfair mb-4">Prenez soin de vous</h2>
              <p className="mb-6">
                Contactez-moi pour découvrir comment ces prestations bien-être peuvent enrichir 
                votre parcours de développement personnel et professionnel.
              </p>
              <Button className="bg-erika-peach hover:bg-erika-peach/90 text-white px-8 py-6 rounded-full text-base">
                Découvrir les prestations
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrestationsBienEtre;
