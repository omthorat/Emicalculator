import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
function Navigation() {
  return (
    <>
    <nav className="navbar flex justify-between items-center text-4xl font-thin text-white px-12 ">
     <div className="navlogo">
       <Link to="/" > <img src="images/logo.png" className='logo'/></Link>
     </div>
     <div className='navitem flex justify-center gap-8 font-thin  text-xl' >
     <div className='about me  hover:text-black'>
     <Link to="/" >About Me</Link>
     </div>
     <div className='projects  hover:text-black'>
     <Link to="/" >Projects</Link>
     </div>
     <div className='my to-do  hover:text-black'>
     <Link to="/" >My To-Do</Link>
     </div>
     <div className='contact me  hover:text-black'>
     <Link to="/" >Contact Me</Link>
     </div>

     </div>
    </nav>
    </>
  )
}

export default Navigation