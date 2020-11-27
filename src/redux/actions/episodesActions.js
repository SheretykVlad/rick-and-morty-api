import { episodesConstants } from '../constants/constants';

export const fetchAllEpisodesFromApi = () => {
    return async (dispatch) => {
        fetch('https://rickandmortyapi.com/api/episode/')
        .then(response => response.json())
        .then(data => {
            let episodes = [];
            let episodesForTable = [];
            data.results.map(episode => {
                episodes.push(episode)
                episodesForTable.push({
                    id: episode.id,
                    episodeName: episode.name,
                    airDate: episode.air_date,
                    episode: episode.episode
                })
            })
            fetch(data.info.next)
            .then(response => response.json())
            .then(data => {
                data.results.map(episode => {
                    episodes.push(episode)
                    episodesForTable.push({
                        id: episode.id,
                        episodeName: episode.name,
                        airDate: episode.air_date,
                        episode: episode.episode
                    })
                })
                fetch(data.info.next)
                .then(response => response.json())
                .then(data => {
                    data.results.map(episode => {
                        episodes.push(episode)
                        episodesForTable.push({
                            id: episode.id,
                            episodeName: episode.name,
                            airDate: episode.air_date,
                            episode: episode.episode
                        })
                    })
                    dispatch({
                        type: episodesConstants.GET_ALL_EPISODES,
                        payload: {episodes, episodesForTable}
                    })
                })
            })
        })
    }
}

export const fetchEpisodesWithNameFilter = (name) => {
    return async (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/episode/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            let episodes = [];
            let episodesForTable = [];
            data.results.map(episode => {
                episodes.push(episode)
                episodesForTable.push({
                    id: episode.id,
                    episodeName: episode.name,
                    airDate: episode.air_date,
                    episode: episode.episode
                })
            })
            if (data.info.next) {
                fetch(data.info.next)
                .then(response => response.json())
                .then(data => {
                    data.results.map(episode => {
                        episodes.push(episode)
                        episodesForTable.push({
                            id: episode.id,
                            episodeName: episode.name,
                            airDate: episode.air_date,
                            episode: episode.episode
                        })
                    })
                    dispatch({
                        type: episodesConstants.GET_ALL_EPISODES,
                        payload: {episodes, episodesForTable} 
                    })
                })
            } else {
                dispatch({
                    type: episodesConstants.GET_ALL_EPISODES,
                    payload: {episodes, episodesForTable} 
                })
            }
        })
    }
}