export default function searchReducer(state={searchResults: []}, action){
    //console.log(action)
    switch (action.type) {
        case 'FETCH_SEARCH':
            //console.log(action.payload)
            return {searchResults: action.payload};
            console.log('finished')
        default:
            return state;
    }
}