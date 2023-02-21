
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Textimonials from "./components/textimonials/Textimonials"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import Meanu from "./components/meanu/Meanu"
import './App.scss';

import { useState } from "react"
function App() {

  const [meanu,setMeanu]=useState(false)
  return (
    <div className="app">
   <Topbar meanu={meanu} setMeanu={setMeanu}/>
   <Meanu meanu={meanu} setMeanu={setMeanu}/>
   <div className='section'>
   <Intro/>
   <Portfolio/>
   <Work/>
   <Textimonials/>
   <Contact/>
   </div>
   
    </div>
  );
}

export default App;
