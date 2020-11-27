import { charactersConstants } from "../constants/constants";

function isInteger(num) {
    return (num ^ 0) === num;
}

export const firstFetchCharactersFromAPI = () => {
    return async (dispatch) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const totalPagesOfCharacters = Math.ceil(parseInt(data.info.count) / 10);
            const currentCharacters = data.results.slice(0, 10);
            dispatch({
                type: charactersConstants.GET_FIRST_CHARACTERS,
                payload: {
                    currentCharacters, totalPagesOfCharacters
                }
            })
        })
    }
}

export const firstFetchCharactersWithFilterFromAPI = (filter) => {
    return async (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/character${filter}`)
        .then(response => response.json())
        .then(data => {
            const totalPagesOfCharacters = Math.ceil(parseInt(data.info.count) / 10);
            const currentCharacters = data.results.slice(0, 10);
            dispatch({
                type: charactersConstants.GET_FIRST_CHARACTERS,
                payload: {
                    currentCharacters, totalPagesOfCharacters
                }
            })
        })
    }
}

export const fetchCharactersFromPageWithFilter = (filter, page) => {
    return async (dispatch) => {
        const partOfCharacters = page / 2;
        if (isInteger(partOfCharacters)) {
            fetch(`https://rickandmortyapi.com/api/character${filter}&page=${Math.ceil(partOfCharacters)}`)
            .then(response => response.json())
            .then(data => {
                const currentCharacters = data.results.slice(10, 20);
                dispatch({
                    type: charactersConstants.GET_CHARACTERS,
                    payload: {
                        currentCharacters
                    }
                })
            })
        } else {
            fetch(`https://rickandmortyapi.com/api/character${filter}&page=${Math.ceil(partOfCharacters)}`)
            .then(response => response.json())
            .then(data => {
                const currentCharacters = data.results.slice(0, 10);
                dispatch({
                    type: charactersConstants.GET_CHARACTERS,
                    payload: {
                        currentCharacters
                    }
                })
            })
        }
    }
}

export const fetchCharactersFromPage = (page) => {
    return async (dispatch) => {
        const partOfCharacters = page / 2;
        if (isInteger(partOfCharacters)) {
            fetch(`https://rickandmortyapi.com/api/character/?page=${Math.ceil(partOfCharacters)}`)
            .then(response => response.json())
            .then(data => {
                const currentCharacters = data.results.slice(10, 20);
                dispatch({
                    type: charactersConstants.GET_CHARACTERS,
                    payload: {
                        currentCharacters
                    }
                })
            })
        } else {
            fetch(`https://rickandmortyapi.com/api/character/?page=${Math.ceil(partOfCharacters)}`)
            .then(response => response.json())
            .then(data => {
                const currentCharacters = data.results.slice(0, 10);
                dispatch({
                    type: charactersConstants.GET_CHARACTERS,
                    payload: {
                        currentCharacters
                    }
                })
            })
        }
    }
}