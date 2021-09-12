import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { dispatchContent } from '../../redux/actions';
import SingleContent from '../../Components/SingleContent/SingleContent';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import './Trending.css'

function Trending(props) {

    const { page, content } = props.state;   //accesing the state from redux

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_watch_monetization_types=flatrate`)
        props.dispatch(dispatchContent(data.results)) //storing data and sending dispatch to the redux
    }

    useEffect(() => {
        fetchTrending()  //invoking the fetchTrending function
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending" >
                {content && content?.map((e) => (<SingleContent
                    key={e.id}
                    id={e.id}
                    poster={e.poster_path}
                    title={e.title || e.name}
                    date={e.first_air_date || e.release_date}
                    media_type={e.media_type}
                    vote_average={e.vote_average}
                />))}
            </div>
            <CustomPagination />
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
export default connect(mapStateToProps, mapDispatchToProps)(Trending);