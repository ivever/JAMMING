import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/TrackList';

class SearchResult extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                
                <TrackList track={this.props.searchResults}
                onAdd={this.props.onAdd}
                isRemoval={false}/>
            </div>
        )
    }
}

export default SearchResult;