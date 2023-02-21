import React from 'react'
import "./portfoliolist.scss"
function Portfoliolist({id,title,active,setSelected}) {
  return (
    <li className={active? "Portfoliolist active":"Portfoliolist"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}

export default Portfoliolist