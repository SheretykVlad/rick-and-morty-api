import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CharactersComponent from './components/CharactersComponent/CharactersComponent';
import EpisodesComponent from './components/EpisodesComponent/EpisodesComponent';
import LocationsComponent from './components/LocationsComponent/LocationsComponent';
import WatchListComponent from './components/WatchListComponent/WatchListComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Route path='/' exact component={WelcomeComponent}/>
        <Route path='/characters' component={CharactersComponent}/>
        <Route path='/episodes' component={EpisodesComponent}/>
        <Route path='/locations' component={LocationsComponent}/>
        <Route path='/watch_list' component={WatchListComponent}/>
      </BrowserRouter>
    </div>
  )
}