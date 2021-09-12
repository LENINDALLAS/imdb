import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { dispatchSetPage } from '../../redux/actions';
import Pagination from '@material-ui/lab/Pagination';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createTheme({   //creating a dark theme for pagination
    palette: {
        type: 'dark',
    }
})

function CustomPagination({ dispatch, state }) {

    const handlePageChange = (page) => {    // creating a dispatch to redux store
        dispatch(dispatchSetPage(page))
        window.scroll(0, 0)               //to make the window to scroll top
    }

    useEffect(() => {
        dispatch(dispatchSetPage())
    }, [window.scroll(0, 0)])

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
            }}>

            <ThemeProvider theme={darkTheme} >
                <Pagination count={state.numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    color="primary"
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomPagination);