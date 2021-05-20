import * as React from 'react';
import { Link } from 'gatsby'
import { navLinks,
  navLinkItem,
  navLinkText } from '../components/layout.module.css'


const Navbar = () => {
  return (  
    <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="#about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="#experience" className={navLinkText}>Experience</Link></li>
          <li className={navLinkItem}><Link to="#projects" className={navLinkText}>Projects</Link></li>
        </ul>
      </nav>
    )
}

export default Navbar

