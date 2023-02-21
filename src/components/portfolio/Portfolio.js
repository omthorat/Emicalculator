import React, { useState } from 'react'
import Portfoliolist from "../portfoliolist/Portfoliolist"
import "./portfoli.scss"
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "../../data"
import { useEffect } from 'react'
function Portfolio() {
  const [selected,setSelected]=useState("Featured")
  const [data,setData]=useState([])
  const list = [{
    id:"Featured",
    title:"Featured",
  },
  {
    id:"Web",
    title:"Web App",
  },
  {
    id:"Mobile",
    title:"Mobile app",
  },
  {
    id:"Design",
    title:"Design",
  },
  {
    id:"Content",
    title:"Content",
  }]
  
  useEffect(()=>{
    switch(selected){
      case "Featured":
        setData(featuredPortfolio)
        break;
        case "Web":
        setData(webPortfolio)
        break;
        case "Mobile":
        setData(mobilePortfolio)
        break;
        case "Design":
        setData(designPortfolio)
        break;
        case "Content":
        setData(contentPortfolio)
        break;
        default:
          setData(featuredPortfolio)
    }

  },[selected])
  return (
    <div className='portfolio' id='Portfolio'>
    <h1>Portfolio</h1>
    <ul> {
      list.map((item)=>(
        <Portfoliolist title={item.title}
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
        />
      ))
    }</ul>
   
     <div className="container">
      
      {
        data.map((d)=>{
          return<>
          <div className="item">
          <img src={d.img}  className='img' alt="" />
          <h3>{d.title}</h3>
          </div>
          
          </>
          
        })
      }
        

     </div>
    </div>
  )
}

export default Portfolio