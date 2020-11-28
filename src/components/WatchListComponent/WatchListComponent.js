import { IconButton, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../../UI/Navbar/Navbar';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';

export default function WatchListComponent() {
    const [episodeName, setEpisodeName] = useState('');
    const [episodes, setEpisodes] = useState(JSON.parse(localStorage.getItem('episodes')) || []);

    async function handleClick() {
        if(episodeName.trim()) {
            const newEpisod = {
                episodeName: episodeName,
                isView: false,
                id: Date.now().toString()
            };
            const episodesListForLocalStorage = [];
            episodes.map(episode => {
                episodesListForLocalStorage.push(episode);
            });
            episodesListForLocalStorage.push(newEpisod);
            localStorage.setItem('episodes', JSON.stringify(episodesListForLocalStorage));
            setEpisodes(prev => {
                return [
                    ...prev,
                    newEpisod
                ]
            });
            setEpisodeName('');
        } else {
            alert('Ooops! You must enter the episode name!');
        }
    }

    function deleteTheEpisode(id) {
        const episodesForLocalStorage = episodes.filter(episode => episode.id !== id);
        setEpisodes(episodesForLocalStorage)
        localStorage.setItem('episodes', JSON.stringify(episodesForLocalStorage))
    }

    return(
        <div>
            <Navbar/>
            <div className='search-field'>
                <TextField id="outlined-basic" label="Enter the episode" variant="outlined" style={{width: 400}} value={episodeName} onChange={event => setEpisodeName(event.target.value)}/>
                <button className='button-search' type='button' onClick={() => handleClick()}>Add</button>
            </div>
            <div className='episodes-field'>
                {episodes.map((episode, index) => {
                    if (!episode.isView){
                        return(
                            <div key={episode.id} className='episode'>
                                <div>
                                    <span>{index + 1}</span>
                                    <span className='episode-name'>{episode.episodeName}</span>
                                </div>
                                <IconButton aria-label="delete" onClick={() => deleteTheEpisode(episode.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}