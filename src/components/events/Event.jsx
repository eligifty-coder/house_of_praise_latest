import {useState} from 'react'
import classes from './Event.module.css'
import eventImage from '../../images/eventImage.png'
import newer from '../../images/newer.png'
import older from '../../images/older.png'
import image from '../../images/image.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import left from '../../images/left.png'
import right from '../../images/right.png'



const Event = () => {
   const [click, setClick] = useState(false)
   const [index, setIndex] = useState(0)
   const [count, setCount] = useState(0)
   const imageArrs =[image, image2,image3]
   const eventArray = [
      { year:'2022', month: 'Oct', day: 12, time: '8:00am', title: 'Thanksgiving Service', action: 'Find out more' },
      { year: '2022', month: 'Sept', day: 13, time: '9:00am', title: 'Thanksgiving Service', action: 'Find out more' },
      { year: '2022', month: 'Nov', day: 14, time: '2:00am', title: 'Thanksgiving Service', action: 'Find out more' },
      { year: '2022', month: 'Dec', day: 15, time: '7:00am', title: 'Thanksgiving Service', action: 'Find out more' }
   ]
   const handleImgLoop = () => {
      setCount(prev => prev + 1)
      if (count >= imageArrs.length - 1) {
         setCount(imageArrs.length - 1)
         return
      }
   }

   const handleLoopBack = () => {
      setCount(prev => prev - 1)
      if (count <= 0) {
         setCount(0)
         return
      }
   }
   const handleNewer = () => {
      setIndex(index - 1)
      if (index <= 0) {
         setIndex(0)
      }
   }
   const handleOlder = () => {
      setIndex(index +1)
      if (index >= eventArray.length-1) {
         setIndex(eventArray.length-1)
      }
   }
   const handleFalse = () => {
      return setClick(false)
   }
   const handleTrue = () => {
      return setClick(true)
   }

   const upcomingStyles = {
      backgroundColor: !click ? '#FC3C3C' : 'transparent',
      color: !click ? '#fff' : '',
   }
   const galleryStyles = {
      backgroundColor: click ? '#FC3C3C' : 'transparent',
      color: click ? '#fff' : '',
   }
   const singleItem = eventArray[index]
   const smallDisplay = <article className={classes.smallContent} >
      <div className={classes.tag}>
         <h3>{ singleItem.month}</h3>
         <h3>{ singleItem.day}</h3>
      </div>
      <div className={classes.header}>
         <h1>{singleItem.month} {singleItem.day} {singleItem.year}</h1>
         <h3>{singleItem.time}</h3>
      </div>
      <div className={classes.data}>
         <h1>{singleItem.title}</h1>
         <a href="#event">{singleItem.action}</a>
      </div>
   </article>
   const singleImage = imageArrs[count]
   const imageArticle = <article className={classes.gallery}>
      <div className={classes.imgAction}>
         <img src={left} alt="left" onClick={handleLoopBack} />
         <img src={right} alt="right" onClick={handleImgLoop} />
      </div>
      <img src={singleImage} alt="event" className={classes.mainImage}/>
   </article>
   const mappedEvents = eventArray.map((singleItem, index) => {
      return (
         <article className={classes.largeContent}  key={index} >
            <div className={classes.tag}>
               <h3>{singleItem.month}</h3>
               <h3>{singleItem.day}</h3>
            </div>
            <div className={classes.header}>
               <h1>{singleItem.month} {singleItem.day} {singleItem.year}</h1>
               <h3>{singleItem.time}</h3>
            </div>
            <div className={classes.data}>
               <h1>{singleItem.title}</h1>
               <a href="#events">{singleItem.action}</a>
            </div>
         </article>
      )
   })
   return (
      <section className={classes.event} name="events"  >
         <img src={eventImage} className={classes.imageOverlay} alt="overlay" />
         <div className={classes.title} >
            <h1 >Events</h1>
         </div>
         <div className={classes.content} >
            <div className={classes.actions}>
               <button onClick={handleFalse} style={upcomingStyles} >Upcoming Events</button>
               <button onClick={handleTrue} style={galleryStyles} >Gallery</button>
            </div>
            <div className={classes.body}>
               <ul>
                  {!click &&  smallDisplay}
                  
                  {!click && mappedEvents}
                  {click && imageArticle}
               </ul>
               {!click && <div className={classes.navigate}>
                  <div className={classes.move}>
                     <button className={classes.btn} onClick={handleNewer} >
                        <img src={newer} alt="newer" />
                     </button>
                     <span>Newer</span>
                  </div>
                  <div className={classes.move}>
                     <span>Older</span>
                     <button className={classes.btn} onClick={handleOlder} >
                        <img src={older} alt="older" />
                     </button>
                  </div>
               </div>}
            </div>
         </div>
      </section>
   )
}

export default Event