import React from "react";
import { connect } from "react-redux";
import {fetchSearch} from "../actions/fetchSearch"
import SearchResults from "./SearchResults";


class Search extends React.Component{
    
    constructor(){
        super()
        this.state={
            searchWord: ''
        }
    }

    handleChange = (event) => {
        this.setState({searchWord: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchSearch(this.state)
    }


    render(){
        return(
            <div>
                <p>search component</p>

                <form onSubmit={this.handleSubmit}>
                    <label>
                    Search:
                    <input type="text" value={this.state.searchWord} onChange={this.handleChange} placeholder="search the smithsonian" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {fetchSearch}) (Search)