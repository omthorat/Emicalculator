import React, { useState } from 'react'
import "./contact.scss"
function Contact() {
  const [response,setResponse] = useState("")
  return (
    <div className='contact' id='Contact'>
      <div className="left">
        <img src="images/contact.svg" alt="" />
      </div>
      <div className="right">
      <h1>Contact Us</h1>
        <form action="">
        <input type="text"  placeholder='Enter Eamil Id'/>
        <input type="number" placeholder="Enter Mobile No."/>
        
        <textarea name="" id="" placeholder='FeedBack/Questions?...' cols="30" rows="10"></textarea>
        
       <button type="submit" onClick={()=>setResponse("Thank you for Response :)")}>Send</button>
        <h2>{response}</h2>
        </form>
      </div>
    </div>
  )
}

export default Contact
