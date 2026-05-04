import Title from './Title'

import imgCSS from "../assets/techno/css.png"
import imgWORDPRESS from "../assets/techno/wordpress.jpg"
import imgFlutter from "../assets/techno/flutter.png"
import imgHTML from "../assets/techno/html.png"
import imgNEXT from "../assets/techno/next-js.webp"
import imgNODE from "../assets/techno/node-js.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgMONGODB from "../assets/techno/mongoDB.png"

import dc from "../assets/companies/DC.png"
import kms from "../assets/companies/kms.jpg"

const skills = [
  {id:1, name: "HTML", image:imgHTML},
  {id:2, name: "CSS", image:imgCSS},
  {id:3, name: "WordPress", image:imgWORDPRESS},
  {id:4, name: "Flutter", image:imgFlutter},
  {id:5, name: "Node", image:imgNODE},
  {id:6, name: "MongoDB", image:imgMONGODB},
  {id:7, name: "TypeScript", image:imgTYPE},
  {id:8, name: "Next.js", image:imgNEXT},
  {id:9, name: "Tailwind CSS", image:imgTAILWIND},
]

const competences = [
  {
    id:1,
    role: "Développeur web",
    company: "Digita Center",
    period: "Jan 2026 - present",
    description: [
      "Développement de nouvelles fonctionnalités pour leur site.",
      "Optimisation des performances de la plateforme.",
    ],
    image:dc
  },
  {
    id:2,
    role: "Développeur fullstack",
    company: "KMS",
    period: "Jan 2026 - Mars 2026",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture sclable et optimisée.",
    ],
    image:kms
  },
   {
    id:3,
    role: "Développeur frontend",
    company: "KMS",
    period: "Jan 2026 - Fév 2026",
    description: [
      "Développement d'une interface utilisateur pour gestion de stock.",
      "Implementation des tests unitaires et E2E.",
    ],
    image:kms
  },
]

export function Skills() {
  return (
    <div id='Skills'>
      <Title title='Compétences'/>
      <div className='flex flex-col-reverse md:flex-row md:ml-20'>
        <div className='flex flex-wrap gap-4 md:w-1/4 mt-4 md:mt-0 justify-center items-center'>
          {skills.map((skill) => (
            <div key={skill.id} className='flex justify-center items-center flex-col'>
              <div className='w-18 h-18 p-2 rounded-full border-2 border-primary'>
                <img src={skill.image} alt={skill.name}
                 className='object-cover rounded-full h-full w-full'
                />
              </div>
              <span className='mt-2 text-sm'>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className='md:ml-1 flex flex-col space-y-4'>
            {competences.map((competence) =>(
              <div key={competence.id}
              className='flex flex-col bg-base-100 p-5 rounded-xl shadow-lg'
              >
                <div className='flex items-center'>
                  <img src={competence.image} alt={competence.company}
                   className='object-cover h-10 w-10'
                  />
                  <div className='ml-4'>
                    <h1 className='text-xl text-primary font-bold'>
                      {competence.role}, {competence.company}
                    </h1>
                    <span className='text-sm p-primary'>
                      {competence.period}
                    </span>
                  </div>
                </div>
                <ul className='list-disc ml-16 mt-2'>
                  {competence.description.map((desc, index) =>(
                    <li key={index}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

