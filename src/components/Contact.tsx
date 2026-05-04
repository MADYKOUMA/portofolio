import { Mail, Map, Phone } from 'lucide-react'
import Title from './Title'

export function Contact() {

  return (

     <section id="Contact" className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre */}
        <Title title='Contactez-moi'/>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Infos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Parlons de votre projet
            </h3>
            <p className="text-white mb-6">
              Vous avez un projet ou une idée ? N'hésitez pas à me contacter.
              Je suis disponible pour collaborer ou répondre à vos questions.
            </p>

           <div className="space-y-3">

  <a href="mailto:madykouma96@gmail.com" className="flex items-center gap-2">
    <Mail size={22} className='icon-primary'/>
    <span className='text-2xl'>madykouma96@gmail.com</span>
  </a>

  <a href="tel:+22376356698" className="flex items-center gap-2">
    <Phone size={22}  className='icon-primary'/>
    <span className='text-2xl'>+223 76 35 66 98</span>
  </a>

  <div className="flex items-center gap-2">
    <Map size={22} className='icon-primary'/>
    <span className='text-2xl'>Bamako, Mali</span>
  </div>

</div>
          </div>

          {/* Formulaire */}
          <form className=" p-6 rounded-2xl shadow-md space-y-4">
            
            <div>
              <label className="block mb-1 text-sm font-medium">
                Prénom et Nom
              </label>
              <input
                type="text"
                placeholder="Votre prénom et nom"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Adresse e-mail
              </label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Votre message"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-lg py-2 rounded-lg transition"
            >
              Envoyer
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

