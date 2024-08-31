
import LogoImage from '../assets/icons/logo.svg';
import MenuIcon from '../assets/icons/menu.svg';


export const Navbar = () => {
  return (
    <div className="">
      <div className="px-4">
    <div className="container">
      <div className="py-4 flex items-center justify-between">

      <div className="relative">
        <div className='absolute w-full top-2 bottom-0  blur-md '></div>

      <LogoImage className="h-12 w-12 relative mt-1"/>
      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

      <MenuIcon className="" />
      </div>
      <nav className=' gap-6 items-center hidden sm:flex'>
        
        <a href="#" className='text-opacity-60  hover:text-opacity-100 transition' >Hakkımızda</a>
        <a href="#" className='text-opacity-60  hover:text-opacity-100 transition'>Features</a>
        <a href="#" className='text-opacity-60  hover:text-opacity-100 transition'>Updates</a>
        <a href="#" className='text-opacity-60  hover:text-opacity-100 transition'>Help</a>
        <a href="#" className='text-opacity-60  hover:text-opacity-100 transition'>Customers</a>
        <button className='bg-white py-2 px-4 rounded-lg text-black'>Get for free</button>
      </nav>

      </div>




    </div>
    </div>
    </div>
  )
};
