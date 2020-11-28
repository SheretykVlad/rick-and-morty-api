import { getAllLocations } from '../../services/getAllLocations';
import { locationsConstants } from '../constants/constants';

export const fetchAllLocationsFromAPI = async () => {
    return async (dispatch) => {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(response => response.json())
        .then(async data => {
            const urls = [];
            for (let i = 1; i <= data.info.pages; i++) {
                urls.push(`https://rickandmortyapi.com/api/location/?page=${i}`)
            }
            let locationsArray = await Promise.all(urls.map(async page => {
                let locationsRecord = await getAllLocations(page);
                return locationsRecord;
            }))
            let locationsForTable = [];
            locationsArray.map(locations => {
                locations.map(location => {
                    locationsForTable.push({id: location.id, name: location.name, type: location.type, dimension: location.dimension});
                })
            })
            dispatch({
                type: locationsConstants.GET_ALL_LOCATIONS,
                payload: {
                    locations: locationsForTable
                }
            })
        })
    }
}

export const fetchLocationsWithNameFilter = async (name) => {
    return async (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/location/?name=${name}`)
        .then(response => response.json())
        .then(async data => {
            const urls = [];
            for (let i = 1; i <= data.info.pages; i++) {
                urls.push(`https://rickandmortyapi.com/api/location/?page=${i}&name=${name}`)
            }
            let locationsArray = await Promise.all(urls.map(async page => {
                let locationsRecord = await getAllLocations(page);
                return locationsRecord;
            }))
            let locationsForTable = [];
            locationsArray.map(locations => {
                locations.map(location => {
                    locationsForTable.push({id: location.id, name: location.name, type: location.type, dimension: location.dimension});
                })
            })
            dispatch({
                type: locationsConstants.GET_ALL_LOCATIONS,
                payload: {
                    locations: locationsForTable
                }
            })
        })
        .catch((error) => {
            alert('Oooops! There are no such location!')
        });
    };
};

