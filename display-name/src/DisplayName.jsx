import React, { useState } from "react";
import styles from "./DisplayName.module.css";



function DisplayName(){

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[showName,setShowName] = useState(false);
    
   
    const displayName = (e)=>{   
        e.preventDefault();
        //fullName = firstName +" "+lastName;
        if(firstName !=="" && lastName !==""){
           setShowName(true);            
        }   
    };

    const handleChange = (e) => {
        if(e.target.name === "firstName"){
            setFirstName(e.target.value);
        }else{
            setLastName(e.target.value);
        }
    };
    
    return(
       <div className={styles.form_div}>   
        <form onSubmit={displayName}>

                <h1>Full Name Display</h1>
                <div> First Name: <input type="text" name="firstName" value={firstName} onChange={handleChange}></input></div><br />
                <div> Last Name: <input  type="text" name="lastName" value={lastName} onChange={handleChange}></input></div><br/>
                <button type="submit">Submit</button>
         </form>
         <br/>
        <div>{
            showName && 
            (<label>Full Name: {firstName} {lastName} </label>)
            }   
        </div>
    
      </div>);

}
export default DisplayName;