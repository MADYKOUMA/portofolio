import { Video } from "lucide-react";
import Title from "./Title";


import img1 from '../assets/projects/1.png'
import img2 from '../assets/projects/2.png'
import img3 from '../assets/projects/3.png'
import img4 from '../assets/projects/4.png'
import img5 from '../assets/projects/5.png'
import img6 from '../assets/projects/6.png'
import { FaGithub } from "react-icons/fa";

const projets = [
  {
    id:1,
    title: "Applications e-commerce",
    description:
      "Je conçois des plateformes e-commerce modernes et sur mesure, permettant aux entreprises de vendre efficacement en ligne. De la gestion des produits et des catégories jusqu’au suivi des commandes et des utilisateurs, chaque solution est pensée pour maximiser les ventes, offrir une expérience fluide aux clients et simplifier l’administration au quotidien.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    demoLink:"0",
    repoLink:"0",
    image:img1
  },
    {
    id:2,
    title: "Site vitrine",
    description:
      "J’ai conçu un site vitrine professionnel avec WordPress + MySQL, pensé pour aider l’entreprise à gagner en visibilité, renforcer sa crédibilité et attirer plus de clients en ligne. Le site combine un design moderne, rapide et entièrement responsive avec une structure optimisée pour le référencement (SEO), afin d’assurer une meilleure position sur les moteurs de recherche.",
    technologies: ['WordPress', 'MySQL', 'SEO', 'LWS'],
    demoLink:"0",
    repoLink:"0",
    image:img2
  },
  {
    id:3,
    title: "Site e-commerce",
    description:
      "Développement d’un site e-commerce avec WordPress et MySQL, permettant la vente de produits en ligne avec une gestion simple des articles, catégories et commandes. Le site est responsive, rapide et optimisé pour offrir une expérience utilisateur fluide et professionnelle, tout en facilitant la gestion du contenu côté administrateur.",
    technologies: ['WordPress', 'MySQL', 'SEO', 'LWS'],
    demoLink:"0",
    repoLink:"0",
    image:img3
  },
  {
    id:4,
    title: "Systèmes de gestion sur mesure",
    description:
      "Je développe des outils digitaux adaptés aux besoins spécifiques des entreprises (gestion de stock, associations, établissements scolaires, etc.). Ces solutions permettent d’automatiser les tâches, de centraliser les données et de gagner un temps précieux dans la gestion quotidienne.",
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Postgresql'],
    demoLink:"0",
    repoLink:"0",
    image:img4
  },
  {
    id:5,
    title: "API sécurisées et évolutives",
    description:
      "Je mets en place des API robustes avec Node.js pour garantir des échanges de données rapides, fiables et sécurisés. Mes architectures sont conçues pour supporter la montée en charge et accompagner la croissance des projets sans compromis sur la performance.",
    technologies: ['Node.js'],
    demoLink:"0",
    repoLink:"0",
    image:img5
  },
  {
    id:6,
    title: "Déploiement et mise en production",
    description:
      "J’accompagne mes clients jusqu’à la mise en ligne de leurs projets. De la configuration des serveurs au déploiement final, je veille à ce que chaque application soit stable, rapide et accessible en toute sécurité, aussi bien sur le web que sur mobile.",
    technologies: ['GitHub', 'Render', 'LWS', 'PlayStore', 'AppStore'],
    demoLink:"0",
    repoLink:"0",
    image:img6
  },
];

export function Projects() {
  return (
    <div className="mt-10" id='Projects'>
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projets.map((projet) => (
          <div key={projet.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img src={projet.image} alt={projet.title}
              className="w-full rounded-xl h-50 object-cover"
            />
            <div>
              <h1 className="my-2 text-primary text-xl font-bold">
                {projet.title}
              </h1>
              <p className="text-sm">
                {projet.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {projet.technologies.map((tech) =>(
                <span className="text-accent p-1 rounded-xl">{tech}</span>
              ))}
            </div>
            <div className="flex mt-3">
              <a href={projet.demoLink} className="btn btn-primary w-2/3">
                Demo
              <Video className="w-4"/>
              </a>
               <a href={projet.repoLink} className="btn btn-ghost w-1/3 ml-2">
              <FaGithub className="w-4"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
