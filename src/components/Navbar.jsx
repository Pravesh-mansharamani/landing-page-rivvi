import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import Logo from '../assets/RIVVI_Logo_1080x1080-05.png'


const Navbar = () => {
    const [nav, setNav] = useState(false);
      
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' id='navbar'>
      <a href='/'><img src={Logo} alt='/' className='max-w-[250px]'/></a>
      <ul className='hidden md:flex px-6'>
      <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='section' spy={true} smooth={true} offset={-50} duration={500}>Features</Link></li>
      <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='contact' spy={true} smooth={true} offset={-150} duration={500}>Contact</Link></li>
      <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='payment' spy={true} smooth={true} duration={500}>Pricing</Link></li>
      </ul>
    
    <div onClick={handleNav} className='block md:hidden'>
    {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} />}
    </div>
    <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <a href='/'><h1 className='w-full text-5xl font-bold text-[#242267] m-4'>Rivvi.</h1></a>
        <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='section' spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav} >Features</Link></li>
        <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='contact' spy={true} smooth={true} offset={-150} duration={500} onClick={handleNav} >Contact</Link></li>
        <li className='p-4 hover:text-[#5271ff] hover:underline text-2xl font-bold'><Link to='payment' spy={true} smooth={true} duration={500} onClick={handleNav}>Pricing</Link></li>
      </ul>
    </div> 
  )
}

export default Navbar