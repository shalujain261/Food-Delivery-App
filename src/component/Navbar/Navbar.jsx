import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

function Navbar() {
 
    const [menu,setMenu] = useState("about");

  return (
    <div className='navbar'>
    <img src={assets.logo} alt="" className='logo'/>
    <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
    </div>
    </div>
  )
}

export default Navbar