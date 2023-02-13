import {  useState,useRef} from 'react'
import classes from './ministry.module.css'
import MinstryImage from '../../images/ministry_image.png'


const Ministry = () => {

   const buttonRef = useRef([])
   const [itemNum, setItemNUm] = useState(0)
   const content = ([
      {
         title: 'Marriage Counseling',
         content: 'Description. House of Praise is set up by God to raise, restore and equip a people to the complete and full standard of Christ and is led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.',
         img: MinstryImage
      },
      {
         title: 'Children',
         content: 'Description. House of Praise is set up by God to raise, restore and equip a people to the complete and full standard of Christ and is led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.',
         img: MinstryImage
      },
      {
         title: 'Prayer',
         content: 'Description. House of Praise is set up by God to raise, restore and equip a people to the complete and full standard of Christ and is led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.',
         img: MinstryImage
      },
      {
         title: 'Youth',
         content: 'Description. House of Praise is set up by God to raise, restore and equip a people to the complete and full standard of Christ and is led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.',
         img: MinstryImage
      }])
   const titleArr = [{ title: 'Marriage Counseling', id: 'p1', clicked: false }, { title: 'Children', id: 'p2', clicked: false }, { title: 'Prayer', id: 'p3', clicked: false }, { title: 'Youth', id: 'p4', clicked: false }]

   const handleClickButton = (event, index) => {
      setItemNUm(index)
      buttonRef.current.forEach(item => {
         if (event.target === item) {
            item.style.backgroundColor = '#FC3C3C'
            item.style.color = '#fff'
         } else {
            item.style.color = '#1F1F1F'
            item.style.backgroundColor = '#fff'
         }
      })
   }
   const mappedTitle = titleArr.map((item, index, arr) => {
      const check = index === 0
      return <button
         type='button'
         key={item.id}
         style={{ backgroundColor: check ? '#FC3C3C' : '', color: check ? '#fff' : '' }}
         // className={firstButton !== undefined ? classes.clickedBtn:null}
         onClick={(event) => handleClickButton(event, index)}
         ref={el=>(buttonRef.current[index]=el)}

      >
            {item.title}
         </button>
   })
   return (
      <div className={classes.ministry} name='ministry'>
         <header className={classes.title}>
            <h1>Ministries</h1>
         </header>
         <section className={classes.content} >
            <div className={classes.btns}>
            {mappedTitle}
            </div>
            <article>
               <header>
                  <h1>{content[itemNum].title}</h1>
                  <p>{content[itemNum].content}</p>
                  <button className={classes.action} >Call to Action</button>
               </header>
                  <img src={content[itemNum]['img']} alt="ministry" />
         
            </article>
         </section>
      </div>
   )
}

export default Ministry