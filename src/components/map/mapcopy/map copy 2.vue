<template>
  <div>

   <GMapMap
      :center='center'
      :zoom="5"
   map-type-id="terrain"


      style="width: 500px; height: 550px"
  >
    <GMapCluster>
       <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
           :icon= '{
          url: "https://wallpaperaccess.com/full/3458146.jpg",
          scaledSize: {width: 20, height:20},
          labelOrigin: {x: 16, y: -10}
      }'
          @click="center=m.position"
      >

      <GMapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div>
          I am in info window
           <InfoContent/>
        </div>
      </GMapInfoWindow>
      
       </GMapMarker>
    </GMapCluster>
  </GMapMap>
  </div>
</template>

<script>
  import InfoContent from './InfoContent.vue'
export default {
  name: 'App',
  components:{
    InfoContent
  },
  mounted() {
    this.geolocate();
    this.setEventBus();
   
  },
  data() {
    return {
     center: { lat: 45.508, lng: -73.587 },
     lat:45.508,
     lng:-73.587,
     currentPlace: "",
       markers: [],
       places: [],
        infoWindowPos: {
              lat: 0,
              lng: 0
          },
          infoWinOpen: false,
       infoOptions: {
              pixelOffset: {
                  width: 0,
                  height: -35
              }
          },
          radius:2,
          type:'restaurant'
    }
  },
  methods:{
    setEventBus()
    {
     
      this.emitter.on('markers_fetched',(place)=>{
        
        this.currentPlace = place.placedata;
        // this.addMarker(place.allresto);
        this.AddMarkToFindLocation(place.allresto);
        
       

      })
    },
  geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    AddMarkToFindLocation(data)
    {
      this.markers = [];
      this.places = [];

      if (this.currentPlace) {
        var marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),

        };
        var getMarks=[];
        for( var i = 0; i < data.length; i++ ){
             
             getMarks.push({
               position:{
                  lat:  parseFloat(data[i].lat),
                  lng:  parseFloat(data[i].lng),
                   label: 'test'

               }
             })
        }
       this.markers = getMarks
       
        // this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
       
      }

    },
    addMarker(data) {
     
      if (this.currentPlace) {
        const currentmarker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
         for( var i = 0; i < data.length; i++ ){
             
              // console.log(i);
             const marker = {
              lat: data[i].lat,
              lng: data[i].lng,
            };
            this.markers.push({ position: marker });
           
        }
       
        // this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = currentmarker;
        this.currentPlace = null;
      }
      
    },

  },

  created()
  {
    this.radius
    return   this.$store.dispatch('AllRestaurant',{'lng':this.lng,'lat':this.lat,'type':this.type,'radius':this.radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});


    // alert('re')
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU
  //     const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
  //       this.lng
  //     },${this.lat}&radius=${this.radius *
  //       1000}&type=${this.type}&key=AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU`;

  //     this.axios.get(URL).then(response => {
	// 	this.places = response.data.results;
	// 	this.addLocationsToGoogleMaps();
	// }).catch(error => {
	// 	console.log(error.message);
	// });
    // return   this.$store.dispatch('AllRestaurant');


  }
}
</script>
<style scoped>
.vue-map-container{
  height: 550px;
}
.cluster-0{
  border: 1px solid red !important;
}
</style>