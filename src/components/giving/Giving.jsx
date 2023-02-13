import React from 'react'
import { useState } from 'react'
import classes from './Giving.module.css'
import givingLoop from '../../images/givingLoop.png'
import loopSmall from '../../images/loopSmall.png'
import copyIcon from '../../images/copy.png'

const Giving = () => {
   const [isCopied, setIsCopied] = useState(false);
   console.log(isCopied)
   async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
         return await navigator.clipboard.writeText(text);
      } else {
         return document.execCommand('copy', true, text);
      }
   }
   const handleClick = (text) => {
      copyTextToClipboard(text) 
         .then(() => {
            setIsCopied(true);
            setTimeout(() => {
               setIsCopied(false);
            }, 1500);
         })
         .catch((err) => {
            console.log(err);
         });
   }
   return (
      <div className={classes.giving}  >
         <section className={classes.header} name='giving'  >
            <h1 className={classes.title} >Giving</h1>
            <div className={classes.details} >
               <div className={classes.text}>
                  <h4>Were you blessed by the word today?</h4>
                  <p> Honour God with your substance. We have
                     made giving easy.</p>
               </div>
               <article className={classes.headerContent}>
                  <div className={classes.top}>
                     <div className={classes.left}>
                        <h4>BANK NAME:</h4>
                        <h1>FIRST BANK PLC</h1>
                     </div>
                     <div className={classes.right}>
                        <h4>ACCOUNT NUMBER:</h4>
                        <h1>20275032226   <img src={copyIcon} alt="copy" onClick={() => handleClick(20275032226)} /></h1>
                     </div>
                  </div>
                  <div className={classes.bottom} >
                     <div className={classes.left} >
                        <h4>ACCOUUNT NAME</h4>
                        <h1>CGMI House of Praise Int'l</h1>
                     </div>
                     <div className={classes.right} >
                        <button className={classes.action} >Give Now</button>
                     </div>
                  </div>
               </article>
            </div>
         </section>
         <section className={classes.content} >
            <div className={classes.loop}>
               <img src={givingLoop} alt="loop" className={classes.bigLoop} />
               <img src={loopSmall} alt="small" className={classes.smallLoop} />
            </div>
            <article className={classes.article1}>
               <h1>First timer?</h1>
               <p>
                  If you are a first time viewer and want to learn
                  more about engaging with House of Praise,
                  click
                  here so we can connect with you.
               </p>
               <a href="#event">WhatsApp</a>
            </article>
            <article className={classes.article2} >
               <h1>Online Church</h1>
               <p>
               <span>Subscribe to the latest sermons.</span>
                  Watch all services both past  and present
                  editions on our YouTube channel
               </p>
               <a href="#event">YouTube</a>
            </article>
         </section>
      </div>
   )
}

export default Giving