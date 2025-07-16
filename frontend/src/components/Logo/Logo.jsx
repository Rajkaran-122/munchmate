import React from 'react'
import './Logo.css'

const Logo = ({ variant = 'light' }) => {
  return (
    <div className={`logo-container ${variant}`}>
      <span className="logo-text">
        <span className="logo-munch">Munch</span>
        <span className="logo-mate">Mate</span>
      </span>
    </div>
  )
}

export default Logo 