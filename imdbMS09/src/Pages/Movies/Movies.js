//importing all the necesaary components
import React, { useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../Components/SingleContent/SingleContent';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import Genres from '../../Components/Genres';
import useGenre from '../../hooks/useGenre'
import { connect } from 'react-redux';
import { dispatchContent } from '../../redux/actions';

function Movies(props) {

    const { content, page, selectedGenres, numOfPages } = props.state  //accessing the state from redux
    const genreforURL = useGenre(selectedGenres);                      //creating the genres
    const fetchMovies = async () => {                                 //doing the fetch request using axios
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
            props.dispatch(dispatchContent(data.results, data.total_pages)) //storing data and sending dispatch to the redux
        }
        catch (err) {
            console.log('error while fetching', err);
        }
    }

    useEffect(() => {
        fetchMovies()   //invoking the fetchMovies function
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                type="movie"
            />
            <div className="trending" >
                {content && content.map((e) => (<SingleContent
                    key={e.id}
                    id={e.id}
                    poster={e.poster_path}
                    title={e.title || e.name}
                    date={e.first_air_date || e.release_date}
                    media_type="movie"
                    vote_average={e.vote_average}
                />))}
            </div>
            { numOfPages > 1 && (
                <CustomPagination />
            )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Movies);