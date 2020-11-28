import React from 'react';
import './index.css';
import appIcon from '../../img/app-icon.jpg';
import { Redirect } from 'react-router-dom';

export default function Navbar() {
    const [onStartPage, setOnStartPage] = React.useState(false);

    if (onStartPage) {
        return <Redirect to='/'/>
    }

    return(
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='icon-header' onClick={() => setOnStartPage(true)}>
                    <img src={appIcon} alt='' className='app-icon'/>
                    <p className='app-header'>Rick and Morty</p>
                </div>
                <div className='nav-list'>
                    <a href='/characters' className='nav-list__inner'>Characters</a>
                    <a href='/episodes' className='nav-list__inner'>Episodes</a>
                    <a href='/locations' className='nav-list__inner'>Locations</a>
                    <a href='/watch_list' className='nav-list__inner'>My watch list</a>
                </div>
            </div>
        </div>
    )
}