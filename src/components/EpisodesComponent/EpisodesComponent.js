import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEpisodesFromApi, fetchEpisodesWithNameFilter } from '../../redux/actions/episodesActions';
import Navbar from '../../UI/Navbar/Navbar';
import TableOfSeries from '../../UI/Table/TableOfSeries';
import './index.css';

export default function EpisodesComponent() {
    const dispatch = useDispatch();
    const episodesForTable = useSelector(state => state.episodes.episodesForTable);
    const [nameOfEpisode, setNameOfEpisode] = useState('');

    useEffect(() => {
        dispatch(fetchAllEpisodesFromApi());
    }, [])

    function handleClick() {
        if (nameOfEpisode.trim()) {
            dispatch(fetchEpisodesWithNameFilter(nameOfEpisode));
        } else {
            dispatch(fetchAllEpisodesFromApi());
        }
        setNameOfEpisode('')
    }

    return(
        <div>
            <Navbar/>
            <div className='search-field'>
                <form>
                    <TextField id="outlined-basic" label="Search the episode" variant="outlined" style={{width: 400}} value={nameOfEpisode} onChange={event => setNameOfEpisode(event.target.value)}/>
                    <button className='button-search' type='button' onClick={() => handleClick()}>Search</button>
                </form>
            </div>
            <div className='episodes-table'>
                <TableOfSeries rows={episodesForTable}/>
            </div>
        </div>
    )
}