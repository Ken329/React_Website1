import React from 'react'
import { Button } from './button'
import './MySection.css'

function MySection() {
    return (
        <div className='section-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='sec-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>GET STARTED</Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>WATCH TRAILER
                <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default MySection
