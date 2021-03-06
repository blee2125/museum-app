import React from 'react'
import Search from '../components/Search'
import SearchResults from '../components/SearchResults'
import {fetchSearch} from "../actions/fetchSearch"
import {connect} from 'react-redux'


class SearchContainer extends React.Component{

    constructor(){
        super()
        this.state={
            searchResults: []
        }
    }

    render(){
        return(
            <div>
                <Search />
                <SearchResults searchResults={this.props.searchResults}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        searchResults: state.searchResults,
        
    }
}

export default connect(mapStateToProps, {fetchSearch})(SearchContainer)