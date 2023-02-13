import classes from './Connect.module.css'
import Women from '../../images/women.JPG'
import Men from '../../images/men.png'
import Teen from '../../images/teen.png'
import Youth from '../../images/youth.png'
import ConnectSmall from '../../images/connectImage.png'
import ConnectBig from '../../images/connectImageBig.png'

const Connect = () => {
   const connectArr = [
      { img: Women, text: 'HOP CWFI', title: 'Women' },
      {img:Men, title:'Men',text:'HOP CMFI'},
      { img: Teen, title: 'Teens', text: 'AGAPEFORCE' },
      {img:Youth, title:'Youth',text:'EXPLOIT TRIBE'}
   ]
   const mappedConnect = connectArr.map(item => {
      return <a href={item.title} key={item.title} >
         <img src={item.img} alt="item" />
         <div className={classes.desc} >
            <span className={classes.span}>{item.title}</span>
            <span>{item.text}</span>
         </div>
      </a>
   })
   return (
      <section className={classes.connect} name='connect'>
         <div className={classes.small}>
            <img src={ConnectSmall} alt="connect"  />
         </div>
         <div className={classes.big}>
            <img src={ConnectBig} alt="connect"  />
         </div>
         <article className={classes.top} >
            <h1 className={classes.title}>
               <span>Connect </span> Groups
            </h1>
            <div className={classes.para} >
               <h3>Want to connect with us?</h3>
               <p>Get to know more about small groups and house fellowships in your local area:
               </p>
            </div>
            <a href="#connect">Connect</a>
         </article>
         <article className={classes.lower} >
            <div className={classes.header}>
               <h3>Smaller Group Community</h3>
               <p>Let's walk this journey together.
                  You've come to the right place.</p>
            </div>
            <ul className={classes.connectLists} >
               {mappedConnect}
            </ul>
         </article >
      </section>
   )
}

export default Connect