export const fetchSearch = ({searchWord: term}) =>{
    let apiKey = 'api_key=IFeTnxJCjHBZyf77fnVb0SXC2eBr4MFt47SAhb0H'
    //let searchterm = `?q=${term}`

    //console.log(term)

    return(dispatch) =>{
        fetch(`https://api.si.edu/openaccess/api/v1.0/search?q=${term}&${apiKey}`)
            .then(resp => resp.json())
            //.then(data => console.log(data))
            .then(data => dispatch({
                type: 'FETCH_SEARCH',
                payload: data.response.rows
            }))
    }
}