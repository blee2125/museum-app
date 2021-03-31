import React from 'react'

const SearchResult = (props) => {

    //console.log(props)
    return(
        <div>
        <a href={props.searchResult.content.descriptiveNonRepeating.guid || props.searchResult.content.descriptiveNonRepeating.record_link} activeClassName="active">{props.searchResult.title}</a>
        
        
        </div>
    )
}

export default SearchResult