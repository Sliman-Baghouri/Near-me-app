import axios from "axios";


export default {
    getAllRestaurant: function(data){
       
        var lat = data.center.lat;
        var lng = data.center.lng;
       
        console.log('heres your', 'lat', lat, 'lng', lng)

        // return axios.get("http://localhost:3000/restaurant");

        return axios.get("https://foodtrucker.com.au/wp-json/ft/v1/whats-open?distance="+data.radius+"&within="+data.day+"&lat="+lat+"&lng="+lng)
    
    },
    getAllFoodtrucks: function(data){
        var lat = data.center.lat;
        var lng = data.center.lng;
               let urlx = `https://foodtrucker.com.au/wp-json/ft/v1/whats-open?distance="+5+"&lat="+${lat}+"&lng="+${lng}"`
        console.log(urlx, 'the one we use')

        // alert('api');

        // return axios.get("http://localhost:3000/restaurant");

        return axios.get("https://foodtrucker.com.au/wp-json/ft/v1/whats-open?distance="+100+"&lat="+lat+"&lng="+lng)

    }
  
    
  

    
}



