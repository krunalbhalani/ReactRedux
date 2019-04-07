import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';
import TimelineComponent from '../containers/timelinecomponent';

require('../../scss/style.scss');

const App = () => (
    <div>
        <TimelineComponent />
        <hr/>
        <UserList/>
        <UserDetails />
        <hr/>
        <MovieList />
        <MovieDetail />
    </div>
);

export default App;
