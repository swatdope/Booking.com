import React from 'react'
import "./Header.css"
import {faBed, faCab, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Cab</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Travels</span>
            </div>
            </div>
            <h3 className="headerTitle">Available until 3 Jan 2023</h3>
            <h1 className="headerDesc">Save 15% with the late Escape</h1>
            <h1 className="desc1">Deals</h1>
            <p className="desc2">There's still time to tick one more destination  off your wishlist</p>
            <div className="btn3">
            <button className="btn">Explore Deals</button>
            </div>
            </div>
        </div>
    )
}

export default Header