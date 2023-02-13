import React from 'react'
import Cancel from '../../images/cancel.png'
import classes from './NavItems.module.css'
import Facebook from '../../images/facebook.png'
import Whatsapp from '../../images/whatsapp.png'
import Instagram from '../../images/instagram.png'
import NavLists from '../../utils/NavLists'
const NavItems = ({ cancelClick}) => {
   return (
      <div className={classes.nav}>
         <div className={classes.top} >
               <NavLists/>
            <button onClick={cancelClick}>
               <img src={Cancel} alt="cancel" />
            </button>
         </div>
         <div className={classes.bottom}>
            <a href='about'  className={classes.anchor} >Send us a message</a>
            <ul className={classes.icons} >
               <li>
                  <a href="#footer">
                     <img src={Facebook} alt="facebook" />
                  </a>
               </li>
               <li>
                  <a href="#footer">
                     <img src={Instagram} alt="instagram" />
                  </a>
               </li>
               <li>
                  <a href="#footer">
                     <img src={Whatsapp} alt="Whatsapp" />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default NavItems