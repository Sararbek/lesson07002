import { HEADER_LINKS } from '@/static/Index'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky top-0 left-0 z-10 w-full py-5 bg-black text-white '>
        <div className="container max-w-7xl mx-auto px-4 ">
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold tracking-wider'>UserCards</h2>
                </div>
                <ul className='flex gap-5'>
                    {
                        HEADER_LINKS?.map((link, inx) => (
                            <li key={inx} className='capitalize font-medium '>
                                <NavLink to={link.path}>{link.name}</NavLink> 
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header