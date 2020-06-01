import data from ".././data.json"
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
    if (action.type === "DELETE_COMMENT") {
        let newComments = state.comments.filter(comment => comment.id !== action.id)
        return {
            ...state,
            comments: newComments
        }
    }


    return state
}

export default rootReducer