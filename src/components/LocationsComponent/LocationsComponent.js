import { IconButton, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLocationsFromAPI, fetchLocationsWithNameFilter } from '../../redux/actions/locationsActions';
import Navbar from '../../UI/Navbar/Navbar';
import Table from '../../UI/Table/TableOfSeries';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css';

export default function LocationsComponent() {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.locations.locations);
    const [nameOfLocation, setNameOfLocation] = useState('');

    useEffect(() => {
        async function fetchLocations() {
            dispatch(await fetchAllLocationsFromAPI());
        }
        fetchLocations();
    }, []);

    async function handleClick() {
        if (nameOfLocation.trim()) {
            dispatch(await fetchLocationsWithNameFilter(nameOfLocation));
        } else {
            alert('Ooops! You need to entry something!');
        }
        setNameOfLocation('');
    };

    return(
        <div>
            <Navbar/>
            <div className='search-field'>
                <TextField id="outlined-basic" label="Search the location" variant="outlined" style={{width: 400}} value={nameOfLocation} onChange={event => setNameOfLocation(event.target.value)}/>
                <button className='button-search' type='button' onClick={() => handleClick()}>Search</button>
                <IconButton aria-label="delete" onClick={async () => {dispatch(await fetchAllLocationsFromAPI()); setNameOfLocation('')}}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
            <div className='locations-table'>
                <Table rows={locations} pageSize={20} columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    { field: 'name', headerName: 'Name of location', width: 330 },
                    { field: 'type', headerName: 'Type of location', width: 250, },
                    { field: 'dimension',  headerName: 'Dimension', width: 250, }
                ]}/>
            </div>
        </div>
    )
}