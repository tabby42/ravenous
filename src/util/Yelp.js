const apiKey = 'hqlUBT2UyyGcvrfHrJAvUy5M1R2-2BypcSo1pXgNRKq4gxzCROywjgTuHnn8IDejwIpLP3591mIotFcQqB2FJojHN-ICl5EXPcP6ZPKc1f6k2Tl_tAMx0AFxd-zUWnYx';
const cors = 'https://cors-anywhere.herokuapp.com/';

class Yelp {
	search(term, location, sortBy) {
		return fetch(`${cors}https://api.yelp.com/v3/businesses/search?term=vegan,${term}&location=${location}&sort_by=${sortBy}`, { 
		  headers: { Authorization: `Bearer ${apiKey}` }
		})
		.then(
			response => {
				if(response.ok) {
					//console.log(response.json());
			        return response.json();
			    } else {
			    	throw new Error('Request failed!');
			    }
			}
		).then(
			jsonResponse => {
				if(jsonResponse.hasOwnProperty('businesses')) {
					const businessesArray =  jsonResponse.businesses.map(
						business => {
							return {
								id: business.id,
								imageSrc: business.image_url,
								name: business.name,
								address: business.location.display_address,
								phone: business.display_phone,
								category: business.categories,
								rating: business.rating,
								reviewCount: business.review_count,
								coordinates: business.coordinates
							};
						}
					);
					console.log(businessesArray);
					return businessesArray;
				}
			}
		);
	}
}

export default Yelp;