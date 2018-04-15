import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewed": "review_count"
};

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location:'',
			sortBy: 'best_match'
		};
	}

	//returns the current CSS class for a sorting option
	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}

	//dynamically create the list items needed to display the sort options 
	//(Best Match, Highest Rated, Most Reviewed). 
	//This is to help future proof against potential changes to the Yelp API
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
		});
	}

	render() {
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
		);
	}
}

export default SearchBar;