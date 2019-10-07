import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { MyContext } from '../context/context'

const Navbar = () => {
  //console.log('context', this.context)
  //const {age} = useContext(MyContext); 

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container"> 
        <Link to='/' className="brand-logo">MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar
