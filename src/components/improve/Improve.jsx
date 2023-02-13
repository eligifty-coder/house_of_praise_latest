import React from 'react'
import classes from './Improve.module.css'
import ImproveImage from  '../../images/improveImage.png'
import ImprovePortrait from '../../images/improve.png'
import Big from'../../images/improveBig.png'

const Improve = () => {
   const arr = [
      { title: 'How can we pray for you?', content: 'Share your prayer request here. We will have someone pray with you.', btnText: 'WhatsApp' },
      { title: 'Get to know Jesus.', content: 'Would you like us to take you to Jesus? Would you like to rededicate your life to Jesus? ', btnText: 'WhatsApp' }
   ]
   const mappedArr = arr.map(item => {
      return <li key={item.title}>
         <h1>{ item.title}</h1>
         <p>{ item.content}</p>
         <a href="#about">{ item.btnText}</a>
      </li>
   })
   return (
      <section className={classes.improve} >
         <img src={ImproveImage} alt="placeholder" className={ classes.positioned}/>
         <header>
            <h1>Want to improve your prayer life?</h1>
            <p>Let's walk this journey together.
               You've come to the right place.</p>
         </header>
         <div className={classes.portrait}>
            <img src={ImprovePortrait} alt="portrait" className={classes.small}  />
            <img src={Big} alt="portrait" className={classes.big}  />
         </div>
         <ul>
            {mappedArr}
         </ul>
      </section>
   )
}

export default Improve