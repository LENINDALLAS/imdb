import React, { useEffect } from 'react';
import axios from 'axios';
import { Chip } from "@material-ui/core";
import { connect } from 'react-redux'
import {
    dispatchSetPage,
    dispatchGenres,
    dispatchAddGenres,
    dispatchRemoveGenres
} from '.././redux/actions';


function Genres({ type, dispatch, state }) {       //accessing the state & dispatch from redux

    const handleAdd = (genre) => {            //to add the selected items
        dispatch(dispatchSetPage(1))
        dispatch(dispatchAddGenres(genre))
    }

    const handleRemove = (genre) => {          //to remove the selected items
        dispatch(dispatchSetPage())
        dispatch(dispatchRemoveGenres(genre))
    }

    const fetchGenres = async () => {      //doing the fetch request using axios
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        dispatch(dispatchGenres(data.genres))
    }

    useEffect(() => {
        fetchGenres()
        return () => {
            dispatch(dispatchGenres())
        }
        // eslint-disable-next-line 
    }, [])

    return (
        <div style={{ padding: '6px 0' }}>
            {state.selectedGenres && state.selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    size="small"
                    color="primary"
                    key={genre.id}
                    onDelete={() => handleRemove(genre)}

                />
            ))}
            { state.genres && state.genres?.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 2 }}
                    size="small"
                    key={genre.id}
                    clickable
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
//connecting to the redux store & from here we are passing props & state to the component
export default connect(mapStateToProps, mapDispatchToProps)(Genres);