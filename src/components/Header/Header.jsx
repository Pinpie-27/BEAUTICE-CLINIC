import { Link } from 'react-router-dom';
import logo from '../../components/Header/assets/mainLogo.svg';
import { useCallback, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOutside = useCallback((event) => {
    if (isOpen && !event.target.closest('.menu-container') && !event.target.closest('.menu-icon')) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
  return(
    <nav className="max-w-[74.25rem] mx-auto flex justify-between pt-[1.5rem] lg:pt-[2.5625rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem]">
        <div className='max-w-[16.125rem] max-h-[3.9375rem]'>
        <img src={logo} alt="Logo" className="object-cover" />
        </div>
        <div className='max-w-[43.1875rem] w-full lg:flex justify-between hidden'>
          <div className=' max-w-[30.0625rem] h-[1.5625rem] w-full lg:flex justify-between my-auto'>
            <Link to="/" className='max-w-[4.125rem] text-base text-mediumBlue font-semibold tracking-tight flex'>Home <span className="text-mediumBlue ml-1">+</span></Link>
            <Link to="/about" className='max-w-[3.4375rem] text-base text-darkGray font-semibold tracking-tight'>About</Link>
            <Link to="/service" className='max-w-[4.3125rem] text-base text-darkGray font-semibold tracking-tight'>Service</Link>
            <Link to="/gallery" className='max-w-[4.1875rem] text-base text-darkGray font-semibold tracking-tight'>Gallery</Link>
            <Link to="/blog" className='max-w-[2.5625rem] text-base text-darkGray font-semibold tracking-tight'>Blog</Link>
          </div>
        <div className=''>
          <Link to="/contact" ><button className=' w-[9.875rem] h-[3.25rem] bg-darkPink rounded-xl text-base text-white font-semibold tracking-tight mt-[0.25rem]'>Contact</button></Link>
        </div>
        </div>
        <div className='lg:hidden pt-[0.9375rem]'>
          <MenuIcon onClick={() => setIsOpen(!isOpen)} className="cursor-pointer menu-icon" />
        </div>
       {isOpen && (
        <>
        <div className='absolute top-0 left-0 w-full bg-white shadow-md lg:hidden menu-container'>
        <div className='flex justify-between pt-[0.625rem] pr-[1rem] pl-[1rem]'>
        <div className='max-w-[16.125rem] max-h-[3.9375rem]'>
        <img src={logo} alt="Logo" className="object-cover" />
        </div>
        <div className='lg:hidden flex justify-end pt-[0.9375rem]'>
          <CloseIcon onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>
        </div>
          <div className='flex flex-col items-center'>
            <Link to="/" className='py-2 text-base text-mediumBlue font-semibold tracking-tight hover:w-[9.875rem] hover:h-[3.25rem] hover:bg-darkPink hover:rounded-xl hover:text-center hover:text-white'>Home +</Link>
            <Link to="/about" className='py-2 text-base text-darkGray font-semibold tracking-tight hover:w-[9.875rem] hover:h-[3.25rem] hover:bg-darkPink hover:rounded-xl hover:text-center hover:text-white'>About</Link>
            <Link to="/service" className='py-2 text-base text-darkGray font-semibold tracking-tight hover:w-[9.875rem] hover:h-[3.25rem] hover:bg-darkPink hover:rounded-xl hover:text-center hover:text-white'>Service</Link>
            <Link to="/gallery" className='py-2 text-base text-darkGray font-semibold tracking-tight hover:w-[9.875rem] hover:h-[3.25rem] hover:bg-darkPink hover:rounded-xl hover:text-center hover:text-white'>Gallery</Link>
            <Link to="/blog" className='py-2 text-base text-darkGray font-semibold tracking-tight hover:w-[9.875rem] hover:h-[3.25rem] hover:bg-darkPink hover:rounded-xl hover:text-center hover:text-white'>Blog</Link>
            <Link to="/contact" className='py-2'>
              <button className='w-[9.875rem] h-[3.25rem] bg-darkPink rounded-xl text-base text-white font-semibold tracking-tight'>Contact</button>
            </Link>
          </div>
        </div>
        </>
      )}
    </nav>
  )
}


