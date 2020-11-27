import React, { useState } from 'react';
import Navbar from '../../UI/Navbar/Navbar';
import Pagination from '@material-ui/lab/Pagination';
import Popover from '@material-ui/core/Popover';

export default function EpisodesComponent() {
    const [page, setPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='smth'>
            <Navbar/>
            <h1>EpisodesComponent {page}</h1>
            <button onClick={handleClick}>Open</button>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                The content of the Popover.
            </Popover>
        </div>
    )
}