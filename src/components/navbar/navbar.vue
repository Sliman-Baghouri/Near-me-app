<template>
         <div class="search-text">
         
          <GMapAutocomplete
                  value="Sydney NSW, Australia"
                    class='autocomplete'
                    id="searchTextField"
                    :options="{
                  // bounds: {north: 1.4, south: 1.2, east: 104, west: 102},
                   componentRestrictions: { country: 'au' },
                   
                  // strictBounds: true
            }"
                    
                   @place_changed="setPlace"
            >
            </GMapAutocomplete>
           <span class="gps-icon" @click="getcurrnetlocation"><img :src="require('../../assets/icons/gps.png')" ></span>
         
          </div> 
</template>
<script>
     /* eslint-disable no-unused-vars*/

import $ from "jquery";
const google = window.google;

export default{
  name:"nav-bar",
    computed: {
    google: () => window.google // also make it available in template, as `google`
  },
  data(){
    return {
      searched:false
    }
  },


  methods:{ 
    getcurrnetlocation(){
      
       this.emitter.emit('getcurrent_location',{'currentlocation':true});
    },
    setPlace(place){

      let placedata = place;
      // console.log(place);

      
      //  this.emitter.emit('findDistance',{'placedata':placedata,'status':'autosearch'});

       this.emitter.emit('markers_fetched',{'placedata':placedata,'status':'autosearch'});
        
              console.log($('#searchTextField').val())
        
    },

    byState(){


    },
 
  },

  created(){  
    let that = this;

  }
}


</script>
