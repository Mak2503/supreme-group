import React from 'react'
import NavButtons from './NavButtons'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <nav className='px-20 py-5 bg-white flex justify-between shadow-xl'>
      <Logo />
      <NavButtons />
    </nav>
  )
}

export default Navbar