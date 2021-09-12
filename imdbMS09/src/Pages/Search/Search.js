import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { dispatchSearchContent, dispatchSetPage } from '../../redux/actions';
import {
    TextField,
    ThemeProvider,
    Button,
    Tabs,
    Tab,
} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import SearchIcon from "@material-ui/icons/Search";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";

function Search(props) {

    const [type, setType] = useState(0)
    const [searchText, setSearchText] = useState("")
    const content = props.state.searchContent;        //accesing the state from redux
    const { numOfPages, page } = props.state

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',
            }
        }
    })

    const fetchSearch = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        props.dispatch(dispatchSearchContent(data.results, data.total_pages)) //storing data and sending dispatch to the redux
    }

    useEffect(() => {
        fetchSearch()  //invoking the fetchMovies function
        // eslint-disable-next-line
    }, [type, page])

    return (
        <div>
            <ThemeProvider
                theme={darkTheme}>
                <div style={{ display: 'flex', margin: '15px 0' }}>
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant='filled'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        style={{ marginLeft: 10 }}
                        onClick={fetchSearch}
                    ><SearchIcon fontSize='large' /></Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor='primary'
                    textColor='primary'
                    onChange={(event, newValue) => {
                        setType(newValue)
                        props.dispatch(dispatchSetPage())
                    }}
                    style={{ paddingBottom: 5 }}
                    aria-label="disabled tabs example"
                >
                    <Tab style={{ width: '50%' }} label='Search Movie' />
                    <Tab style={{ width: '50%' }} label='Search Tv Series' />
                </Tabs>

            </ThemeProvider>
            <div className="trending" >
                {content && content?.map((e) => (<SingleContent
                    key={e.id}
                    id={e.id}
                    poster={e.poster_path}
                    title={e.title || e.name}
                    date={e.first_air_date || e.release_date}
                    media_type={type ? "tv" : "movie"}
                    vote_average={e.vote_average}
                />))}
                {searchText && !content && (type ? <h2>No series found</h2> : <h2>No movies found</h2>)}
            </div>
            {numOfPages < 9 && (
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);