import React, {useRef} from 'react'
import classes from '../components/Nav/Navbar.module.css'

const NavLists = () => {
   const navLists = [
      {title: 'About Us', href:'about'},
      {title: 'Connect Groups', href:'connect'},
      {title: 'Ministries', href:'ministry'},
      { title: 'Programs', href:'program'},
      { title: 'Events', href:'events'},
      { title: 'Giving', href:'giving'},
   ]
   const tagRef = useRef([])

   
   const handleNavClick = (event) => {
      tagRef.current.forEach((item,index) => {
         if (item === event.target) {
            const scrollId = item.href.split('#')[1]
            
            const targetEl = document.getElementsByName(scrollId)[0]
            console.dir(targetEl.offsetTop,'elementTop')
            window.scroll({
               top: window.innerWidth >= 1200 ? targetEl.offsetTop + targetEl.clientHeight - window.innerHeight + 70 : targetEl.offsetTop + targetEl.clientHeight - window.innerHeight/2,
               behavior: 'smooth',
               block:'start'
            })

         }
      })
   }

   const mappedNavs = navLists.map((item, index) => {
      return <li key={item.href} onClick={handleNavClick}>
         <a href={`#${item.href}#`} onClick={handleNavClick} ref={el => tagRef.current[index] = el}>{item.title}</a>
      </li>
   })
   return (
      <ul className={classes.lists}>
         {mappedNavs}
      </ul>
   )
}

export default NavLists