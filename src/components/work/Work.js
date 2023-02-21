import React, { useState } from 'react'
import "./work.scss"
function Work() {
  const [currentslide,setCurrentslide]=useState(2)
  const data = [
    {
      id: "1",
      icon: "./images/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./images/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./images/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
    
  const handleslider=(way)=>{
      way==="left" ?setCurrentslide(currentslide>0?currentslide-1:2):setCurrentslide(currentslide < 2 ?currentslide + 1: 0)
      
    
  }
  
  return (
    <div className='work' id='Work'>
    <div className="slider" style={{transform:`translateX(-${currentslide*100}vw)`}}>
    {data.map((d)=>{
      return <> 
      <div className="container">
        <div className="item">
          <div className="left">
          <div className="leftcontainer">
            <div className="imgcontainer">
              <img src={d.icon} alt="" />
              </div>
              <h1>{d.title}</h1>
              <p>{d.desc} </p>
              <span>Projects</span>
          </div>
          </div>
          <div className="right">
            <img src={d.img} alt="" />
          </div>
        </div>
      </div></>
      
    })}
    
    </div>
         

         <div className="leftarrow" >
         <div className="leftside">
         <img src="images/arrow.png" alt=""  onClick={()=>{handleslider("left")}}/>
         </div>
         </div>
         <div className="rightarrow" >
         <div className="rightside">
         <img src="images/arrow.png" alt=""  onClick={()=>{handleslider()}}/>
         </div>
         </div>


    </div>
  )
}

export default Work