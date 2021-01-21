import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall
                        deep inside the Amazon jungle"
                        label='Adventure'
                        path='/Service'
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through
                         the Inslands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/Service'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpg"
                        text="Explore the hidden waterfall
                        deep inside the Amazon jungle"
                        label='Adventure'
                        path='/Service'
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Travel through
                         the Inslands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/Service'
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Travel through
                         the Inslands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/Service'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
