import "./NewUserForm.css";
import React,{ useState } from "react";
// import ButtonSubmit from "./shared/ButtonSubmit";


function NewUserForm() {
    // const [btnDisabled, setBtnDisabled] = useState(true);
    // const [msg, setMsg] = useState("");

    const [firstName, setFirstName] = useState("");
    function handleFirstNameSet(e){
        setFirstName(e.target.value);
    }

    const [lastName, setLastName] = useState("");
    function handleLastNameSet(e){
        setLastName(e.target.value);
    }

    const [email, setEmail] = useState("");
    function handleEmailSet(e){
        
        setEmail(e.target.value);
    }

    

    return (
    <div>
            <form >
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." value={ firstName } onChange={handleFirstNameSet}/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={ lastName } onChange={handleLastNameSet}/>

                <label htmlFor="country">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email.." value={ email } onChange={handleEmailSet}/>
                {/* {msg && <div>{ msg }</div>}          */}
                <button type="submit" />
            </form>
    </div>      
    )
}

export default NewUserForm;