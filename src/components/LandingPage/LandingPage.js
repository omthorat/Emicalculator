import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import './LandingPage.css'
 function LandingPage({history}) {
    const [greetings,setGreeting]=useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const greetings = [
          'Hello',
          'Ciao',
          'नमस्ते',
          'Namaste ',
          'Salam',
        ];
    
        // Set the greeting based on the language array
        
        setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * greetings.length);
            setGreeting(greetings[randomIndex]);
        },500)
    
        // Set a timer to navigate to the home page after 5 seconds
        const timer = setTimeout(() => {
            navigate('/home'); // Replace '/home' with the actual home page route
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <div className='grid place-content-center h-screen greeting-container '>
      <h1 className=' motion-safe:animate-bounce text-4xl font-semibold font-serif '> {greetings}</h1>
    </div>
  )
}
export default LandingPage