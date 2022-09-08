import axios from "axios";


export default {
    getAllVendors: function(data)
    {
        // console.log('api',data);
        var lat = data.center.lat;
        var lng = data.center.lng;
        return axios.get(" https://foodtrucker.com.au/wp-json/ft/v1/vendors?distance="+data.radius +"&within=today&lat="+lat+"&lng="+lng)
        // return axios.get("https://wordpress-693095-2298985.cloudwaysapps.com/wp-json/ft/v1/vendors?distance=2000000000000&within=today&lat=22.2943706&lng=73.1540819")
        // return axios.get("http://localhost:3000/vendors");
    },
  
    
  

    
}