import { Mail } from 'lucide-react'
import img from '../assets/PHOTODV.jpg'

export function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center md:my-30 my-10' id='Hero'>
      <div className='flex flex-col'>
          <h2 className='text-3xl mb-2 md:text-4xl font-bold text-center md:text-left mt-4 md:mt-0'>
            Bonjour, <br /> je suis
            <span className='text-primary'> Mady Kouma</span>
          </h2>
          <p className='my-3 text-lg text-center md:text-left'>
            Je suis un développeur full-stack avec 5 ans d'expériences. <br/>
            Utilisant Flutter / Next.js / Node.js / HTML & CSS / JavaScript / WordPress /<br/> TailwindCSS / MongoDB. Contactez-moi si vous avez besoin de mes services.
          </p>
          <a href="#Contact" className='btn btn-primary md:w-fit h-11 text-lg mt-4'>
            <Mail className='w-5 h-5'/>
            Contactez-moi
          </a>
      </div>
      <div className='md:ml-60'>
        <img src={img} alt="" className='w-66 h-66 object-cover border-4 border-primary shadow-xl mt-10 md:mt-0 '
         style={{
          borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%"
         }}
        />
      </div>
    </div>
  )
}

