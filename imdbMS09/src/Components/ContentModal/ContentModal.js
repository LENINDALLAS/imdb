import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from ".././config/config";
import { connect } from 'react-redux'
import { dispatchModalContent, dispatchModalVideo } from '../../redux/actions';
import './ContentModal.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from '../Carousel/Carousel'

const useStyles = makeStyles((theme) => ({   //inline css
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

function TransitionsModal({ children, media_type, id, state, dispatch }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const content = state.modalContent;
  const video = state.modalVideo;

  const handleOpen = () => {    //to open contentModal file
    setOpen(true);
  };

  const handleClose = () => {   //to close contentModal file
    setOpen(false);
  };

  const fetchData = async () => {    //doing the fetch request using axios
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    dispatch(dispatchModalContent(data))
  }

  const fetchVideo = async () => {    //fecth request for video
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    dispatch(dispatchModalVideo(data.results[0]?.key)) //storing data and sending dispatch to the redux store
  }

  useEffect(() => {
    fetchData()    //invoking the fetchData function
    fetchVideo()   //invoking the fetchVideo function
    // eslint-disable-next-line 
  }, [])

  return (
    <>
      <div
        className='media'
        style={{ cursor: 'pointer' }}
        color='inherit'
        onClick={() => { handleOpen(); fetchData(); fetchVideo() }}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (<div className={classes.paper}>
            <div className='ContentModal'>
              <img className='ContentModal__portrait'
                src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                alt={content.name || content.title}
              />
              <img className='ContentModal__landscape'
                src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape}
                alt={content.name || content.title}
              />
              <div className='ContentModal__about'>
                <span className='ContentModal__title'>
                  {content.name || content.title}
                (
                 {(content.first_air_date ||
                    content.release_date ||
                    '----'
                  ).substring(0, 4)})
               </span>
                {content.tagline &&
                  (<i className='tagline'> {content.tagline}</i>
                  )}

                <span className='ContentModal__description' >
                  {content.overview}
                </span>
                <div>
                  <Carousel media_type={media_type} id={id} />
                </div>
                <Button
                  variant='contained'
                  startIcon={<YouTubeIcon />}
                  color='secondary'
                  target='_blank'
                  href={`https://www.youtube.com/watch?v=${video}`}
                >
                  Watch the trailer
             </Button>
              </div>
            </div>
          </div>
          )}

        </Fade>
      </Modal>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal)