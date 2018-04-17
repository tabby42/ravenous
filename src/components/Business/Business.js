import React, { Component } from 'react';
import './Business.css';

class Business extends Component {
	render() {
		return (
			<div className="Business">
			  <div className="image-container">
			  	<a href={this.props.business.url} target="_blank">
			    	<img src={this.props.business.imageSrc} alt={this.props.business.name}/>
		    	</a>
			  </div>
			  <h2>{this.props.business.name}</h2>
			  <div className="Business-information">
			    <div className="Business-address">
			      <p>
		      		{this.props.business.address.map( (item, index) => <span key={index}>{item}<br /></span> )}
			      </p>
			      <p>
			      	{this.props.business.phone}
			      </p>
			    </div>
			    <div className="Business-reviews">
			      <h3>
			      	{this.props.business.categories.map( category =>
			      		<span key={category.alias}>{category.title} | </span>
		      		)}
			      </h3>
			      <h3 className="rating">{this.props.business.rating} stars</h3>
			      <p>{this.props.business.reviewCount} reviews</p>
			      <p>{this.props.business.isClosed ? 'closed' : 'open'}</p>
			    </div>
			  </div>
			</div>
		);
	}
}

export default Business;
