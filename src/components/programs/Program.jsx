import {useState, useEffect} from 'react'
import classes from './Program.module.css'
import ProgramOverlay from '../../images/program_overlay.png'
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const Program = () => {
   
   const programLists = [{ day: 'Sunday', content: 'Sunday Serivice', time: '8:45am - 11:00am', check: false }, { day: 'Wednesday', content: 'Bible Study', time: '6:30pm - 7:30pm', check: false
   }, { day: 'Thursday', content: 'Prayer Meeting', time: '6:30pm - 7:30pm', check: false },] 
   const [timeStamp, setTimeStamp] = useState('')
   useEffect(() => {
      const time = new Date().getDay()
      setTimeStamp(weekdays[time])
   },[timeStamp])
   const [program, setProgram] = useState(programLists)
   const mappedLists = program.map((item, index) => {
      const background = timeStamp === item.day ? `#FC3C3C` : '#FFEBEB'
      const h1Color = timeStamp === item.day ? `#fff` : '#FC3C3C'
      return (
         <article key={index} style={{ backgroundColor: background}} >
            <h3 style={{ color: h1Color }} >{item.day}</h3>
            <div className={classes.item}>
               <h1 style={{ color: h1Color }}  >{item.content}</h1>
               <p style={{ color: h1Color }} >{ item.time}</p>
            </div>
         </article>
      )
   })
   return (
      <section className={classes.program} name="program" >
         <div className={classes.overlay}>
            <img src={ProgramOverlay} alt="overlay" />
         </div>
         <div className={classes.title} >
            <h1> 
               Programs
            </h1>
            <h3>Share in the Praise Experience</h3>
            <p>We want you to be a part of our services.</p>
         </div>
         <div className={classes.content} >
            {mappedLists}
         </div>
      </section>
   )
}

export default Program