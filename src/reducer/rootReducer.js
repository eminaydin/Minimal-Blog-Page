import data from ".././data.json"
const initState = {
    posts: data
}
console.log(initState);

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer