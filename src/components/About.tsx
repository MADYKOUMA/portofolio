import Title from './Title'
import img from '../assets/PHOTODV.jpg'
import { CalendarSync, LetterText, Paintbrush } from 'lucide-react'

const aboutSections = [
  {
    id:1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend avec une bonne expérience.",
    icon: <LetterText className='icon-primary scale-150'/>
  },
  {
    id:2,
    title: "Développeur Backend",
    description: "Je maîtrise le côté backend pour créer des APIs robustes.",
    icon: <CalendarSync className='icon-primary scale-150'/>
  },
  {
    id:3,
    title: "Passionné par l'UI/UX",
    description: "Créer des des interfaces utilisateurs attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className='icon-primary scale-150'/>
  },
]

export function About() {
  return (
    <div className='bg-base-100 p-3 mb-10 md:mb-10' id='About'>
      <Title title='à propos'/>
      <div className='md:h-90 flex md:ml-30'>
        <div className='hidden md:block md:mt-10'>
          <img src={img} alt='' className='w-66 object-cover rounded-xl'/>
        </div>
        <div className='md:ml-4 space-y-4'>
          {aboutSections.map((section) => (
            <div key={section.id}
              className='flex flex-row md:flex-row items-center
               bg-base-100 p-4 rounded-xl md:w-150 shadow-xl'
            >
              <div className='mb-2 md:mb-0'>
                {section.icon}
              </div>
              <div className='md:ml-4 text-left ml-4 md:text-left'>
                <h2 className='text-xl text-primary font-bold mb-1'>
                   {section.title}
                </h2>
                <p>
                  {section.description}
                </p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

