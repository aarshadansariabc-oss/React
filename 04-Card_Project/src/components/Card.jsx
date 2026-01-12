import React from 'react'
import {Bookmark, Car} from 'lucide-react'

const Card = () => {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src="https://images.icon-icons.com/2699/PNG/512/amazon_logo_icon_169611.png" alt="" />
          <button>Save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Sineor Level</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card