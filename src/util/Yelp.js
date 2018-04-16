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
					console.log(response.json());
			        //return response.json();
			    } else {
			    	throw new Error('Request failed!');
			    }
			}
		).then(
			jsonResponse => {
				// if(jsonResponse.hasOwnProperty('businesses')) {
				// 	jsonResponse.businesses.map(
				// 		business => {

				// 		}
				// 	);
				// }
			}
		);
	}
}

export default Yelp;