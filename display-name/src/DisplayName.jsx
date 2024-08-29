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
                <label>First Name:</label> <input type="text" name="firstName" value={firstName} onChange={handleChange} /><br />
                <label>Last Name:</label><input  type="text" name="lastName" value={lastName} onChange={handleChange} /><br/>
                <button type="submit">Submit</button>
         </form>
         
           {showName && 
            (<p>
                Full Name: {firstName} {lastName}
              </p> 
              
            )}   
       
    
      </div>);

};
export default DisplayName;