export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectMovie = movie => {
    return{
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};

export const deleteMovie = id => {
    return {
        type: 'MOVIE_DELETED',
        id:id
    }
}

export const markMovie = id => {
    return {
        type: 'MOVIE_MARKED',
        id:id
    }
}
