import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMovie,deleteMovie,markMovie} from '../actions/index'

class MovieList extends Component
{
    renderList()
    {
        return this.props.movies.map((m) => {
            return (
                <tr key={m.id} className="cellspace">
                    <td>{m.completed ? <b>{m.name}</b> : m.name}</td>
                    <td><input type="button" className="btn" value="Select" onClick={()=> this.props.selectMovie(m)} /></td>
                    <td><input type="button" className="btn" value="Delete" onClick={()=> this.props.deleteMovie(m.id)} /></td>
                    <td><input type="button" className="btn" value="MarkMovie" onClick={()=> this.props.markMovie(m.id)} /></td>
                </tr>
            );
        });
    }
    render(){
        return(
            <table border="1" cellspacing="5" cellpadding="5">
               {this.renderList()}
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movies
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectMovie, deleteMovie, markMovie}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);
