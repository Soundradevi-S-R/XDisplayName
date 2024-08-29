import React, { useState } from "react";
import styles from "./DisplayName.module.css";



function DisplayName(){

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[fullName,setFullName] = useState("");
    
   
    const displayName = (e)=>{   
        e.preventDefault();
        //fullName = firstName +" "+lastName;
        if(firstName !=="" && lastName !==""){
            setFullName(firstName +" "+lastName);
            console.log(fullName);
        } else {
            alert("Enter name in the required fields");
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
                <div> First Name: <input type="text" name="firstName" value={firstName} onChange={handleChange}></input></div>
                <div> Last Name: <input  type="text" name="lastName" value={lastName} onChange={handleChange}></input></div><br/>
                <button type="submit">Submit</button>
         </form>
         <br/>
        <div><label>Full Name: {fullName} </label></div>
    
      </div>);

}
export default DisplayName;