import { Search, ShoppingBagIcon, X, Menu } from 'lucide-react'
import logo from '../assets/logo.png'
import { navLinks } from '../constantes/Constante'
import { useState } from 'react'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [hideMenu, setHideMenu] = useState(false)

    const toggleMenu = ()=>{
        setMobileMenu(!mobileMenu)
        setHideMenu(!hideMenu)
    }

    const hiddeMenu = ()=>{
        setHideMenu(!hideMenu)
        setMobileMenu(!mobileMenu)
    }
  return (
    <div>
        <div className="lg:mx-8 mx-3 p-2 flex justify-between items-center mt-5">
            <div className='flex gap-4'>
                <div className='shrink-0 mr-2'>
                    <img src={logo} alt={logo} />
                </div>
                <div className='hidden sm:flex ml-2'>
                    <ul className='flex gap-6'>
                        {navLinks.map((link, index)=>(
                            link === 'Home' ? <li key={index} className='font-semibold'>
                                <a href="#">{link}</a></li> :
                            <li key={index} className='font-normal text-neutral-400'><a href="#">{link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex lg:gap-3 gap-1 items-center justify-evenly p-2 text-lg font-normal'>
                <a href="#" className='mr-5 hover:text-red-600 text-neutral-600 tracking-wide'>login</a>
                <Search  className='lg:mx-5 mx-1' />
                <ShoppingBagIcon />
                <button onClick={toggleMenu} className='lg:hidden ml-2'>
                    {mobileMenu ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {mobileMenu &&(
            hideMenu && (
                <div className='w-full text-center flex flex-col gap-3 h-screen bg-neutral-100 absolute top-0 left-0 items-center'>
                    <button onClick={hiddeMenu} className='border rounded-full p-2 my-3'>
                        <X />
                    </button>
                    <ul className='flex flex-col gap-3 justify-evenly'>
                        {navLinks.map((link, index)=>(
                            link === 'Home' ? <li key={index} className='font-semibold my-2'>
                                <a href="#">{link}</a>
                            </li> : <li key={index} className='text-neutral-400 text-xl my-2'>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
            </div>
            )
            )}
    </div>
  )
}

export default Navbar