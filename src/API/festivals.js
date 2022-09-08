import axios from "axios";


export default {
    getAllFestivals: function(data)
    {
              
        var lat = data.center.lat;
        var lng = data.center.lng;
       
        

        return axios.get("https://foodtrucker.com.au/wp-json/ft/v1/events?distance="+data.radius +"&within="+data.day+"&lat="+lat+"&lng="+lng)
   
   
        // return axios.get(" https://wordpress-693095-2298985.cloudwaysapps.com/wp-json/ft/v1/vendors?distance="+data.radius +"&within=today&lat="+lat+"&lng="+lng) 
    },
  
    
  

    
}