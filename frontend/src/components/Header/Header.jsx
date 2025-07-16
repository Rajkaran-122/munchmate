import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Swipe, Order & Enjoy Delicious Food</h2>
        <p>Discover amazing restaurants and order your favorite meals with just a few taps. Fast delivery, fresh food, and great prices - all in one app.</p>
        <a href="#explore-menu" className="view-menu-button">Explore Menu</a>
      </div>
    </div>
  )
}

export default Header