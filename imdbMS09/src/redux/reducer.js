import * as constants from './constants'

const initialState = {                    //initializing initial state of redux
    content: "",
    page: 1,
    numOfPages: 10,
    genres: [],
    selectedGenres: [],
    modalContent: "",
    modalVideo: "",
    searchContent: "",
}

export const reducer = (state = initialState, action) => {   //setting up the reducer

    switch (action.type) {                             //checking for action.type 
        case constants.SET_CONTENT:                   //checking for action.type  & executing the code below
            return {
                ...state,
                content: action.payload.content,
                numOfPages: action.payload.numOfPages || 10,
            }
        case constants.SET_SEARCHCONTENT:
            return {
                ...state,
                searchContent: action.payload.content,
                numOfPages: action.payload.numOfPages,
            }
        case constants.SET_PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        case constants.SET_GENRES:
            return {
                ...state,
                genres: action.payload.genres
            }
        case constants.ADD_GENRES:
            return {
                ...state,
                genres: state.genres.filter((item) => {
                    return item.id !== action.payload.genres.id
                }),
                selectedGenres: [...state.selectedGenres, action.payload.genres]
            }
        case constants.REMOVE_GENRES:
            return {
                ...state,
                selectedGenres: state.selectedGenres.filter((item) => {
                    return item.id !== action.payload.genres.id
                }),
                genres: [...state.genres, action.payload.genres]
            }
        case constants.SET_MODALCONTENT:
            return {
                ...state,
                modalContent: action.payload.modalContent
            }
        case constants.SET_MODALVIDEO:
            return {
                ...state,
                modalVideo: action.payload.modalVideo
            }
        default:
            return state              //if nothing is matching action.type, then default is executed
    }
}

