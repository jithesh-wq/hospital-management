import React from 'react'
import './Admit.css'
import Button from "../components/Button"
function Admit() {
    return (
        <div className="admitContainer">
            <div className="headingContainer">
                <div className="headingTextContainer">
                    <p className="headingText">
                        ADMIT PATIENT
                    </p>
                </div>
            </div>
            <div className="inputContainer">
                <div className="nameInput">
                    <p className="inputLabel">name</p>
                </div>
            </div>
            <div className="admitButtonContainer">
                <Button text="Add +" click={()=>console.log("add")}/>
                <Button text = "Clear" click={()=>console.log("clear")}/>
            </div>
        </div>
    )
}

export default Admit
