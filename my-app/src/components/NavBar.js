import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <nav>
        <Link to='/'>HOME</Link>
        <Link to='/card'>Card</Link>
        <Link to='/aside'>Aside</Link>
    </nav>
  )
}

export default NavBar