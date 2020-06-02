import data from ".././data.json"
const initState = {
    posts: data
}


const rootReducer = (state = initState, action) => {

    if (action.type === "ADD_COMMENT") {
        let posts = [...state.posts]
        posts = state.posts.map(post => {
            if (post.slug === action.payload.comment.postSlug) {
                post.comments.unshift(action.payload.comment);
            }
            return post
        });

        return { ...state, posts }
    }
    if (action.type === "DELETE_COMMENT") {
        let posts = [...state.posts];
        posts = state.posts.map(post => {
            let newPost = { ...post }

            if (newPost.slug === action.payload.slug) {
                let newArray = [...newPost.comments]
                const filteredComments = newArray.filter(comment => comment.id !== action.payload.id)
                console.log(filteredComments);

            }
            return { ...post, newPost }
        }

        );
        console.log(posts);


        return { ...state, posts }
    }
    return state
}

export default rootReducer