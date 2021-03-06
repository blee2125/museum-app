import React from 'react'
//import search from './search'
import SearchResult from './SearchResult'

class SearchResults extends React.Component{
    //console.log(props)


    render(){
        return(
            <div>
                {this.props.searchResults.map((result, id) => <SearchResult key={id} searchResult={result} />)}
            </div>
        )
    }
}

export default SearchResults