import React from 'react'
import './Count.css'
function Count() {
    return (
        <div className="drComponent">
            <div className="ppContainer">
                <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg" className="drPhoto"/>
            </div>
            <div className="nameContainer">
                <p className="drName">Dr. Aidan Crivaro</p>
                <p className="status">Available</p>
            </div>
            <div className="statusContainer">
                <div className="dot" style={{backgroundColor:"red"}}></div>
            </div>
        </div>
    )
}

export default Count
