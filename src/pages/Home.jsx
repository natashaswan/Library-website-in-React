import NewUserForm from "../components/NewUserForm";
import Mynavbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return( 
    <div>
             
        Homepage
        <div>
            <NewUserForm/>
        </div>
    </div>
        
    )
}

export default Home;