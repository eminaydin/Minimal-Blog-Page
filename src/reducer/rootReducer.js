import data from ".././data.json"
import { connect } from "react-redux"
const initState = {
    posts: data,
    comments: []
}


const rootReducer = (state = initState, action) => {

    if (action.type === "ADD_COMMENT") {
        return {
            ...state,
            comments: [...state.comments, action.payload.comment]
        }
    }


    return state
}

export default rootReducer