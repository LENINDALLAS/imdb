import * as constants from './constants'

export const dispatchContent = (content, num) => {        // dispatching content and number of pages
    return {
        type: constants.SET_CONTENT,
        payload: {
            content: content,
            numOfPages: num
        }
    }
}

export const dispatchSearchContent = (content, num) => {   // dispatching Searchcontent and number of pages
    return {
        type: constants.SET_SEARCHCONTENT,
        payload: {
            content: content,
            numOfPages: num
        }
    }
}

export const dispatchSetPage = (no) => {           // dispatching number of pages
    return {
        type: constants.SET_PAGE,
        payload: {
            page: no ? no : 1,
        }
    }
}

export const dispatchGenres = (genre) => {        // dispatching all the genres
    return {
        type: constants.SET_GENRES,
        payload: {
            genres: genre
        }
    }
}

export const dispatchAddGenres = (genre) => {        // dispatching selected genres
    return {
        type: constants.ADD_GENRES,
        payload: {
            genres: genre,
        }
    }
}

export const dispatchRemoveGenres = (genre) => {         // dispatching removed genres
    return {
        type: constants.REMOVE_GENRES,
        payload: {
            genres: genre,
        }
    }
}

export const dispatchModalContent = (data) => {          // dispatching Modal Content
    return {
        type: constants.SET_MODALCONTENT,
        payload: {
            modalContent: data
        }
    }
}

export const dispatchModalVideo = (data) => {            // dispatching Modal video
    return {
        type: constants.SET_MODALVIDEO,
        payload: {
            modalVideo: data
        }
    }
}



