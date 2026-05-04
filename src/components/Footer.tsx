import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="footer footer-center p-10">
  <aside>
    <p className='flex justify-center items-center'>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
  </aside>
  <nav>
    <div className="flex flex-row gap-2 justify-center items-center mt-4">
     <a href="https://whatsapp.com" target='_blank' rel='nooo'>
      <FaWhatsapp className='w-6 h-6 text-current'/>
     </a>
     <a href="https://facebook.com" target='_blank' rel='nooo'>
      <FaFacebook className='w-6 h-6 text-current'/>
     </a>
     <a href="https://linkdin.com" target='_blank' rel='nooo'>
      <FaLinkedin className='w-6 h-6 text-current'/>
     </a>
     <a href="https://github.com" target='_blank' rel='nooo'>
      <FaGithub className='w-6 h-6 text-current'/>
     </a>
    </div>
  </nav>
</footer>
  )
}

