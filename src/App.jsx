import React  from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import './App.css'
import {Collection} from './collection.js'
import hamburger_icon from './img/hamburgerIcon.png'



const App = () => {

  console.log(Collection)
    const navigation= useNavigate()

    if(!Collection){
      return(
        <h1>Error</h1>
      )
    }
   
  return (
    <div className='full_container'>

      <header>
        <div className='startHeader'>
          <p className='mainTitle'>Peace</p>
          <p>Mind</p>
        </div>

        <div className='middleHeader'>
          <input placeholder='Search' type="text" />
          <button className='searchButton'></button>
        </div>

        <div className='endHeader'>
          <img src={hamburger_icon} alt="hamburgerICon" /> 
        </div>
      </header>

      <div className='container'>
         <div className='rightArrow'>
              <button>&gt;</button>
         </div>


         <div className='leftArrow'>
               <button>&lt;</button>
         </div>

         {
          Collection.map((item,index)=>{
            return(
            <motion.div 
            initial={{scale:0.7, opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5}}
            className='eachContainer' 
            key={index}
            onClick={()=> navigation(`/${index}`) }>

            <div className='normal_description'>
              <div className='img_container'>
                <img src={item.img} alt="peaceImg" />
              </div>
                       
              <p className='title'>{item.title}</p>
              <p className='description'>{item.description}</p>
              <p className='description'>{item.description}</p>
              </div>
              <div className='extraDescriptionContainer'>
                   <p className='extraDescription'>{item.extraDescription}</p>

              </div>
             
            </motion.div>
            )
          })
         }

      </div>
    </div>
  )

}

export default App
