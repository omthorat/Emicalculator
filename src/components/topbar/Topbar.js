
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './topbar.scss'
function Topbar({meanu,setMeanu}) {
  return (
    <div className={"topbar " + ( meanu && "active")} >
    <div className="wrapper">
    <div className="left">
      <a href="#intro" className='logo'>IDeWeB.</a>
       <div className="items">
        <div className="icon"><PhoneIcon/>
        <span> +91 7350 260 890</span></div>
        
        <div className="icon"><EmailIcon/>
        <span> omkarthorat832@gmail.com</span></div>
        
       </div>
    </div>
    <div className="right">
    <div className="hamburger" onClick={()=>setMeanu(!meanu)}>
    <span className="line1"></span>
    <span className="line2"></span>
    <span className="line3"></span>

    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Topbar
