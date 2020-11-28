import React from 'react';
import Navbar from '../../UI/Navbar/Navbar';
import './index.css';

export default function WelcomeComponent() {
    return(
        <div>
            <Navbar/>
            <div className='welcome'>
                <h1 className='welcome-header'>Welcome to my Rick and Morty application</h1>
            </div>
        </div>
    )
}