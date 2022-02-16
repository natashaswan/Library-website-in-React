import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Mynavbar(){
    const navigate = useNavigate();
    return (
<> 
    <ul className="navbar">  
        <li className="nav-brand" onClick={()=>navigate("/")}>RusLib</li>      
        <li className="nav-link" onClick={()=>navigate("/About")}>About</li>
        <li className="nav-link" onClick={()=>navigate("/Events")}>Events</li>
        <li className="nav-link" onClick={()=>navigate("/Catalogue")}>Catalogue</li>
    </ul>
</>
  

    )}

export default Mynavbar;