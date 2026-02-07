import React,{useState} from 'react'
import {Collection} from './collection.js'
import { useNavigate, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import './DetailItem.css'
const DetailItem = () => {
  const navigation = useNavigate();
  const {id}=useParams();

  const [startEnd,setStartEnd]=useState({hidden:{},
    show:{
       transition:{staggerChildren:0.5,repeat:1}
    }})

  const [imgMotion,setImgMotion]=useState({
    hidden:{x:'130vh',opacity:0},
    show:{x:0,opacity:1, transition:{ duration:0.5}}
  })
 
  const [buttonMotion,setButtonMotion]=useState({
    hidden:{x:'100vh',opacity:0},
    show:{x:0,opacity:1,ease:'easeOut',transition:{duration:0.5}}
  })

  const [contentMotion,setContentMotion]=useState({hidden:{x:'100vh',opacity:0},
    show:{x:0,opacity:1,transition:{duration:0.5, staggerChildren:0.1}}})
 

  const endfun = ()=>{

       setButtonMotion({
    hidden:{x:0},
    show:{x:'100vh',opacity:0,ease:'easeOut',transition:{duration:0.5}}
    })

    setContentMotion({
       hidden:{x:0},
    show:{x:'100vh',opacity:0,transition:{duration:0.5}}
    })

    setImgMotion({hidden:{x:0},
    show:{x:'100vh',opacity:0, transition:{ duration:0.5}}})

    setStartEnd({hidden:{},
    show:{
       transition:{staggerChildren:0.5,repeat:1,staggerDirection:-1}
    }}
    )

    setTimeout(()=>{
       navigation('/')
    },700)
   

  }
  
  if(!Collection[id]){
    return(
      <h1>hi</h1>
    )
  }

  return (
     

    <div className='full_container1'>
      <div className='backbuttonContainer'>
        <button  onClick={endfun}>&lt;=</button>
      </div>
      
      
       <motion.div variants={startEnd} 
       className='container1'
       initial='hidden'
       animate='show'
       >
         
            <motion.div className='imgContainer'>
                <motion.img variants={imgMotion} src={Collection[id].img} alt="mainImage" />
            </motion.div>
            <motion.div variants={contentMotion} className='container1_content'>
                <p className='content1_title'>{Collection[id].title}</p>
               <p className='content1_description'>{Collection[id].description}</p>
               <p className='content1_extraDescription'>{Collection[id].extraDescription}</p>
               <div className='buttonContainer'>
                  <motion.button variants={buttonMotion}></motion.button>
                  <motion.button variants={buttonMotion}></motion.button>
                  <motion.button variants={buttonMotion}></motion.button>
                  <motion.button variants={buttonMotion}></motion.button>
                  <motion.button variants={buttonMotion}></motion.button>
               </div>
            </motion.div>
            
       </motion.div>
      
    </div>
  )
}

export default DetailItem   
