import {useState} from 'react'
import classes from './Live.module.css'
import Video  from '../../images/live.png'
const Live = () => {
   const [clicked, setClicked] = useState(false)
   const handleVideoOn = () => {
      setClicked(true)
   }
   // const handleVideoOff = () => {
   //    setClicked(false)
   // }
   return (
      <>
      <div className={classes.live} name='live' >
         <h1>Live Events</h1>
            <div className={classes.video} onClick={handleVideoOn} >
            { !clicked && <img src={Video} alt="video" />}
            {clicked && <iframe  src="https://www.youtube.com/embed/Qi7arLk0Fmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>}
         </div>
         </div>
         
         </>
   )
}

export default Live