import React from 'react'
import './Count.css'
function Count() {
    return (
      <div className = "countContainer">
          <div className= "countTitleContainer">
            <p className = "coountTitle">Todays Covid Cases</p>
          </div>
          <div className = "countValueContainer">
            <p className = "countValue">76</p>
          </div>
      </div>
    )
}

export default Count
