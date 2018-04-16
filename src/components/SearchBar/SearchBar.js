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
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
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

	handleTermChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		});
	}

	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		event.preventDefault();
	}

	//dynamically create the list items needed to display the sort options 
	//(Best Match, Highest Rated, Most Reviewed). 
	//This is to help future proof against potential changes to the Yelp API

	//onClick={this.handleSortByChange.bind(this, sortByOptionValue)} ==>
	//==>This will allow us to both bind to the current value of this 
	//(as we usually do in the constructor()) but also bind the current 
	//sortByOptionValue as the first argument to the method call, 
	//ensuring the method is called with the appropriate value when clicked.
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue} 
						className={this.getSortByClass(sortByOptionValue)}
						onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >{sortByOption}</li>;
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
			    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
			    <input placeholder="Where?" onChange={this.handleLocationChange}/>
			  </div>
			  <div className="SearchBar-submit" onClick={this.handleSearch}>
			    <a>Let's Go</a>
			  </div>
			</div>
		);
	}
}

export default SearchBar;