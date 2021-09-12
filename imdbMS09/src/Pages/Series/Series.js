import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { dispatchContent } from '../../redux/actions'
import SingleContent from '../../Components/SingleContent/SingleContent';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import Genres from '../../Components/Genres';
import useGenre from '../../hooks/useGenre'

function Series(props) {

    const { page, content, numOfPages, selectedGenres } = props.state  //accesing the state from redux
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        props.dispatch(dispatchContent(data.results, data.total_pages)) //storing data and sending dispatch to the redux
    }

    useEffect(() => {
        fetchMovies()  //invoking the fetchMovies function
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <div>
            <span className="pageTitle">Series</span>
            <Genres
                type="tv"
            />
            <div className="trending" >
                {content && content.map((e) => (<SingleContent
                    key={e.id}
                    id={e.id}
                    poster={e.poster_path}
                    title={e.title || e.name}
                    date={e.first_air_date || e.release_date}
                    media_type="tv"
                    vote_average={e.vote_average}
                />))}
            </div>
            { numOfPages > 1 && (
                <CustomPagination />
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}
//connecting to the redux store & from here we are passing props & state to the component
export default connect(mapStateToProps, mapDispatchToProps)(Series);