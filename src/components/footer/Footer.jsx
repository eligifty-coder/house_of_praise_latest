import React from 'react'
import classes from './Footer.module.css'
import logo from '../../images/footer_logo.png'

const Footer = () => {
   const navArr = [{ text: "About Us", link: "#about" }, { text: 'Connect Groups', link: '#connect' }, { text: 'Ministries', link: '#ministry' }, { text: 'Programs', link: '#programs' }, { text: 'Events', link: '#events' }, { text:'Giving',link:'#giving'}]
   const connectArr = [{ text: 'facebook', link: '#' }, { text: 'Twitter', link: '#' }, { text: 'Instagram', link: '#' }, { text: 'Whatsapp', link: '#' }, { text: 'Youtube', link: '#' }, { text: 'Email', link: '#' }]
   const mappedNav = navArr.map((nav, index) => {
      return <li key={index}>
         <a href={nav.link}>{ nav.text}</a>
      </li>
   })
   const mappedConnect = connectArr.map((connect, index) => {
      return <li key={index}>
         <a href={connect.link}>{connect.text}</a>
      </li>
   })

   const hopYear = new Date().getFullYear()
   return (
      <section className={classes.footer} name="footer">
         <div className={classes.head}>
            <div className={classes.top}>
               <img src={logo} alt="footer logo" />
               <div className={classes.address}>
                  <h1>
                     ADDRESS
                  </h1>
                  <p>Visit us at No 1, Church Street, Church City, Church
                     State.</p>
               </div>
            </div>
            <div className={classes.subgrid}>
               <div className={classes.navigation}>
                  <h1>NAVIGATION</h1>
                  <ul>
                     {mappedNav}
                  </ul>
               </div>
               <div className={classes.connect}>
                  <h1>CONNECT</h1>
                  <ul>
                     {mappedConnect}
                  </ul>
               </div>
            </div>
         </div>
         <div className={classes.tail}>
            <span>© House of Praise, Church of God Mission International. {hopYear}.</span>
         </div>
      </section>
   )
}

export default Footer