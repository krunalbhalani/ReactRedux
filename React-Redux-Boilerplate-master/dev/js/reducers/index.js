import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import reducer from './reducer-movies.js';
import SelectedMovieReducer from './reducer-selected-movie';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    movies:reducer,
    movie:SelectedMovieReducer
});

export default allReducers
