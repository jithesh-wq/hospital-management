import React from 'react'
import './DashBoard.css'
import Notification from '../components/Notification'
function DashBoard() {
    return (
        <div className = "dashboardContainer">
            <div className = "firstContainer"></div>
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
            <div className = "thirsContainer"></div>
        </div>
    )
}

export default DashBoard
