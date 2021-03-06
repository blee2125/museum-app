import React from 'react'

const SearchResult = (props) => {

    //console.log(props)
    return(
        <div>
        
            <p>{props.searchResult.title}</p>
        </div>
    )
}

export default SearchResult