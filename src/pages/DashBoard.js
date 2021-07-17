import React from 'react'
import './DashBoard.css'
import Notification from '../components/Notification'
import Doctor from '../components/Doctor'
import Calendar from 'react-calendar';
import Count from '../components/Count'
import './Calender.css'
function DashBoard() {
    return (
        <div className = "dashboardContainer">
            <div className = "firstContainer">
                <div className="allCountContainer">
                    <Count title="TODAYS COVID CASES" value="5" valueBg="#FFDBDB"/>
                    <Count title="TOTAL COVID CASES" value="75" valueBg="#C5FFD6"/>
                    <Count title="TOTAL PATIENTS" value="425" valueBg="#CFDAFF"/>
                    <Count title="AVAILABLE DOCTORS" value="26" valueBg="#FCF7B2"/>
                    
                </div>
                <div className="allButtonContainer">
                    test2
                </div>
            </div>
            <div className = "secondContainer">
                <div className = "allNotificationContainer">
                        <p className="containerTitle">Notifications</p>
                        <div className = "notificationList">
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                        </div>


                </div>
            </div>
            <div className = "thirdContainer">
                <div className = "alldrContainer">
                     <p className="containerTitle">All Doctors</p>
                     <div className = "doctorList">
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "false"/>
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "false"/>
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "true"/>
                        <Doctor name="" online = "false"/>
                     </div>
                </div>
                <div className = "calendarContainer">
                    <Calendar/>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
