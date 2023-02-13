import { useState, useEffect } from 'react'
import classes from './Navbar.module.css'
import Logo from '../../images/logo.png'
import Hamburger from '../../images/hamburger.png'
import Image from '../../images/image1.JPG'
import Image2 from '../../images/image2.JPG'
import Image3 from '../../images/image11.JPG'
import Image4 from '../../images/image11.JPG'
import Image5 from '../../images/image5.JPG'
import Image6 from '../../images/image6.JPG'
import Image7 from '../../images/image7.JPG'
import Image8 from '../../images/image8.JPG'
import Image9 from '../../images/image9.JPG'
import ArrowLeft from '../../images/arrow-left.svg'
import ArrowRight from '../../images/arrow-right.svg'
import NavItems from '../SmallNavBar/NavItems'
import NavLists from '../../utils/NavLists'


const Navbar = () => {
   

   const [count, setCount] = useState(0)
   const [buttonLeft, setButtonLeft] = useState('')
   const [buttonRight, setButtonRight] = useState('')
   const imageArray = [Image, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]
   const [click, setClick] = useState(false)
   const [navScroll, setNavScroll] = useState('')
   const toggleClick = () => {
      setClick(prev => !prev)
   }
   const cancelClick = () => {
      setClick(false)
   }
   useEffect(() => {
      window.addEventListener('scroll', stickNavbar)
      return () => {
         window.removeEventListener('scroll', stickNavbar);
      };
   }, [])
   const stickNavbar = () => {
      if (window !== undefined) {
         let windowHeight = window.scrollY
         windowHeight > 500 ? setNavScroll(classes.stickyClass) : setNavScroll(classes.relativeClass)
      }
   }

   let displayedImage = imageArray[count]
   const handleImgLoop = () => {
      // setButtonLeft(classes.red)
      // setButtonRight('')
      // setCount(prev => prev + 1)
      // if (count >= imageArray.length - 1) {
      //    setCount(imageArray.length - 1)
      //    return
      // }
   }
   useEffect(() => {
      const timer = setInterval(() => {
         setCount(prev => prev + 1)
         if (count >= imageArray.length - 1) {
            setCount(0)
         }
      },3000)
      return ()=> clearInterval(timer)
   },[count, imageArray.length])
   console.log(count)

   const handleLoopBack = () => {
      setButtonRight(classes.red)
      setButtonLeft('')
      setCount(prev => prev - 1)
      if (count <= 0) {
         setCount(0)
         return
      }
   }


   return (
      <section className={`${classes.section}`} id='welcome'>
         {click && <NavItems cancelClick={cancelClick} />}
         <header className={`${classes.header} ${navScroll}`}>
            <div className={classes.start}>
               <p>JOIN US THIS SUNDAY AT 9:00AM IN PERSON OR VIA
               </p>
               <a href="#0" className={classes.anchor}> LIVESTREAM AT 9:00AM</a>
            </div>
            <nav className={classes.smallScreen}>
               <a href="#logo">
                  <img src={Logo} alt="logo" />
               </a>
               <button onClick={toggleClick} >
                  <img src={Hamburger} alt="hamburger" />
               </button>
            </nav>
            <div className={classes.screen} >
               <nav className={classes.bigScreen}>
                  <a href="#logo">
                     <img src={Logo} alt="logo" />
                  </a>
                  <div className={classes.navigations}>
                     <ul className={classes.lists}>
                        <NavLists/>
                     </ul>
                     <a href="#event" className={classes.get} >Get in touch</a>
                  </div>
               </nav>
            </div>
         </header>
         <div className={classes.welcome}>
            <div className={classes.carousel}>
               <img src={displayedImage} alt='display' className={classes.display} />
               <div className={classes.controls}>
                  <button className={buttonRight} onClick={handleLoopBack} >
                     <img src={ArrowLeft} alt="arrow-left" />
                  </button>
                  <button className={buttonLeft} onClick={handleImgLoop} >
                     <img src={ArrowRight} alt="arrow-right" />
                  </button>
               </div>
            </div>
            <div className={classes.lower} >
               <h2 className={classes.title}>
                  Welcome to CGMI
                  <span> House of Praise</span>
               </h2>
               <div className={classes.actions}>
                  <a href='#about'>Upcoming Events </a>
                  <a href='#about' className={classes.transparent}>Service Days </a>
               </div>
            </div>
         </div>
      </section>

   )
}

export default Navbar