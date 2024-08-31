
import InstaIcon from '../assets/icons/insta.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'

export const Footer = () => {
  return(
    <footer className='py-5 /60 border-t border-white/20'>
    <div className="container">
      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        <div className="text-center"> 2024 Eldora UI All rights are reserved</div>
        <ul className='flex justify-center gap-2.5'>
          <li><LinkedInIcon/></li>
          <li><InstaIcon/></li>
        </ul>
      </div>

    </div>
    </footer>
  )
};
