import { IconButton, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEpisodesFromApi, fetchEpisodesWithNameFilter } from '../../redux/actions/episodesActions';
import Navbar from '../../UI/Navbar/Navbar';
import Table from '../../UI/Table/TableOfSeries';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';

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
            alert('Ooops! You need to entry something!');
        }
        setNameOfEpisode('');
    };

    return(
        <div>
            <Navbar/>
            <div className='search-field'>
                <TextField id="outlined-basic" label="Search the episode" variant="outlined" style={{width: 400}} value={nameOfEpisode} onChange={event => setNameOfEpisode(event.target.value)}/>
                <button className='button-search' type='button' onClick={() => handleClick()}>Search</button>
                <IconButton aria-label="delete" onClick={() => {dispatch(fetchAllEpisodesFromApi()); setNameOfEpisode('')}}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
            <div className='episodes-table'>
                <Table rows={episodesForTable} pageSize={25} columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    { field: 'episodeName', headerName: 'Episode name', width: 330 },
                    { field: 'airDate', headerName: 'Air date', width: 190, },
                    { field: 'episode',  headerName: 'Episode', width: 90, }
                ]}/>
            </div>
        </div>
    )
}