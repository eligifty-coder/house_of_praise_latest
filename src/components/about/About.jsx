import React, {useRef} from 'react'
import classes from './About.module.css'
import Overlay from '../../images/aboutOverlay.png'

const About = () => {
   const aboutRef = useRef(null)
   return (
      <div className={classes.about} ref={aboutRef}>
         <img src={Overlay} alt="overlay" className={classes.overlay}/>
         <section name="about" className={classes.aboutSection}>
            <h1 className={classes.title}>
               <span>About </span> Us
            </h1>
            <div className={classes.paragraphs}>
               <p className={classes.para1}>
                  House of Praise (HOP CGMI) is a branch of Church of God Mission International
                  divinely born by the urge of the Holy Spirit with specific instructions of the Lord to Archbishop
                  B.A. Idahosa as stated:
               </p>
               <p className={classes.para2}>
                  Raise up an army for me, to go with the gospel to all Nations. Gather together those whom I
                  have called
                  and I will send them with the fire of my spirit. Give my word and your example to many who will
                  go to teach, preach and heal.
               </p>
               <p className={classes.para3} >
                  House of Praise is set up by God to raise, restore and equip a people to the complete and full
                  standard of Christ and is
                  led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.
               </p>
            </div>
         </section>
      </div>
   )
}

export default About