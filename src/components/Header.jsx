import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const {items}  = useSelector((state)=> state.cart);
    return (
        <div className='bg-white py-3 flex justify-between items-center lg:px-10 md:px-8 px-5 shadow-md'>
            <h1 className='flex lg:flex-row md:flex-row lg:gap-2 md:gap-2 flex-col '>
            <h1 className='text-xl font-kavoon text-blue rounded-full bg-white leading-5'>POS</h1>
            <h1 className='text-xl font-kavoon text-blue rounded-full bg-white leading-5'>PRO</h1>
            </h1>
            <div className='flex lg:gap-5 md:gap-5 gap-2'>
                <Link to={'/'} className={`${location.pathname === '/' ? 'font-semibold text-blue border-b-2 border-blue' : '' } lg:text-sm md:text-sm text-xs`}>Services</Link>
                <Link to={'/insights'} className={`${location.pathname === '/insights' ? 'font-semibold text-blue border-b-2 border-blue' : '' } lg:text-sm md:text-sm text-xs`}>Insights</Link>
                <Link to={'/about'} className={`${location.pathname === '/about' ? 'font-semibold text-blue border-b-2 border-blue' : '' } lg:text-sm md:text-sm text-xs`}>About Us</Link>
            </div>
            <div className='flex lg:gap-4 md:gap-4 gap-1  bg-white items-center'>
                <Link to={'/cart'} className='lg:hidden flex'><FiShoppingBag size={25} color='#00a3ac'/>
                    {
                        items.length > 0 ? (
                            <div className='bg-blue text-center rounded-full text-xs w-[20px] h-[20px] relative right-3 -top-2 text-white'>
                     <p>{items.length}</p>
            
                    </div>
                        ) : (
                            <span></span>
                        )
                    }
                    
                
                </Link>
                <div ><RiAccountCircleFill size={40} color='#00a3ac' /></div>
            </div>
        </div>
    )
}

export default Header