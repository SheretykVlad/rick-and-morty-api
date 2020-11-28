import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstFetchCharactersFromAPI, fetchCharactersFromPage, firstFetchCharactersWithFilterFromAPI, fetchCharactersFromPageWithFilter } from '../../redux/actions/charactersActions';
import Navbar from '../../UI/Navbar/Navbar';
import Card from '../../UI/Card/Card';
import './index.css'
import Pagination from '@material-ui/lab/Pagination';
import SelectFilter from '../../UI/Selector/Selector';

export default function CharactersComponent() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);
    const totalPagesOfCharacters = useSelector(state => state.characters.totalPagesOfCharacters);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(firstFetchCharactersFromAPI())
    }, [])

    function getTheFilter(text) {
        setFilter(text);
        setPage(1);
        if (text){
            dispatch(firstFetchCharactersWithFilterFromAPI(text))
        } else {
            dispatch(firstFetchCharactersFromAPI())
        } 
    }

    return(
        <div>
            <Navbar />
            <div className='selector'>
                <SelectFilter getTheFilter={getTheFilter}/>
            </div>
            <div className='characters-cards'>
                {characters.currentCharacters.map((character) => {
                    return <Card character={character} key={character.id}/>
                })}
            </div>
            <div className='pagination'>
                <Pagination count={totalPagesOfCharacters} siblingCount={2} page={page} onChange={(event, value) => {
                    if (!filter) {
                        setPage(value); 
                        dispatch(fetchCharactersFromPage(value));
                    } else {
                        setPage(value);
                        dispatch(fetchCharactersFromPageWithFilter(filter, value))
                    }
                }}/>
            </div>
        </div>
    )
}
