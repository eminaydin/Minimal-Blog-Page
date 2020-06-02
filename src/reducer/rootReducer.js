import data from ".././data.json"
const initState = {
    posts: data
}


const rootReducer = (state = initState, action) => {

    if (action.type === "ADD_COMMENT") {
        let findPost = state.posts.find(post => post.slug === action.payload.comment.postSlug);
        let index = state.posts.indexOf(findPost);

        return {
            ...state,
            posts: [...state.posts,
            state.posts[index].comments = [...state.posts[index].comments, action.payload.comment]]
        }
    }
    if (action.type === "DELETE_COMMENT") {

        let findPost = state.posts.find(post => post.slug === action.payload.slug);
        let index = state.posts.indexOf(findPost);

        let newComments = state.posts[index].comments.filter(comment => comment.id !== action.payload.id)

        return {
            ...state,
            posts: [...state.posts,
            state.posts[index].comments = newComments]
        }
    }


    return state
}

export default rootReducer