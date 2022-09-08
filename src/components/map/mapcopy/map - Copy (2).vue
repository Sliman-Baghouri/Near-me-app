<template>
  <div ref="map">
    <!-- coputedData -->
 <!-- <div v-show="coputedData">{{AllrestoData}}</div> -->
   <GMapMap
      :center="center"
      :zoom="zoom"
          
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
          url: "/images/french-fries.png",
          scaledSize: {width: 25, height:25},
          labelOrigin: {x: 16, y: -10}
      }'
          @click="toggleInfoWindow(m,index)"
          
      >

      
       </GMapMarker>
    </GMapCluster>
    
      <GMapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div>
         
           <InfoContent :content="infoContents"/>
        </div>
      </GMapInfoWindow>
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
    this.set_all_restaurant();
    this.setInfoContent();
    
  },
  
  data() {
    return {
     center: { lat:45.4221649,lng:-75.6916639 },
     lat:151.1957362,
     lng:-33.8670522,
     zoom: 5,
     currentPlace: "",
     infoContents: '',
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
           currentMidx: null,
          type:'restaurant',
          allrestoData:'',
          coputedData:false,
    }
  },
  computed:{
    AllrestoData()
    { 
      
      //  this.places=this.$store.getters.get_all_restaurant;
      //  var map = new google.maps.Map(this.$refs['map'], {
      //     zoom: 15,
      //     center: new google.maps.LatLng(this.lat, this.lng),
      //     mapTypeId: google.maps.MapTypeId.ROADMAP
      //   });
       
      //  this.places = response.data.results;
       return true;   
       
    } 
  },
  methods:{
    set_all_restaurant()
    {
      

      this.emitter.on('getresto', (restodata) => {
       this.allrestoData= restodata;
      // console.log('resr',restodata);
      this.AddMarkToFindLocation(this.allrestoData);

      })

     
    
    },
    setEventBus()
    {
     
      this.emitter.on('markers_fetched',(place)=>{
        
        this.currentPlace = place.placedata;
        // console.log(place.placedata);
        
        this.setSerchedLocation();

        // this.addMarker(place.allresto);
        // this.AddMarkToFindLocation(place.allresto);
        
       

      })
    },
  geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
      this.markers.push({ position:  this.center})
      // console.log('this.center',this.center)
     
    },
    setSerchedLocation()
    {
        if (this.currentPlace) {
        const currentmarker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position:currentmarker });
        this.places.push(this.currentPlace);
        this.center = currentmarker;
        this.currentPlace = null;
        var radius = this.radius;
      //  alert(2);
       this.$store.dispatch('AllRestaurant',{'center':this.center,'type':this.type,'radius':radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});
  

      }
    },
    AddMarkToFindLocation(data)
    {
      
      this.markers = [];
      this.places = [];
      var marker,i;
      data;
      marker
      if (this.currentPlace) {
      //  console.log('yes') 
       
      }
      else
      {
        // alert(3);
        for(i = 0; i < data.length; i++ )
        {
          
          // marker=data[i].geometry.location
          // var name=data[i].name,

    
          this.markers.push({
             position:{
                  lat:data[i].lat,
                  lng: data[i].lng
             },
             name:data[i].name,
                address:data[i].vicinity,
              icon:data[i].icon,
             
             })
        }
         }

    },
    toggleInfoWindow (marker, infoContent) {

         
          console.log('isssd',marker);
          // console.log('mar',marker)
            this.infoWindowPos = marker.position;
            this.infoContents = marker;
            //  console.log('marker',this.infoContents);

            
            // if(infoContent.show == true)
            // {
            //   this.infoWinOpen=true;

            // }
            // else if(infoContent.show == true){

            // }
            // //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == infoContent.index) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            // //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = infoContent.index;

            }
        },
    setInfoContent()
    {
        this.emitter.on('marker_result_clicked',(infodata)=>{
           let targetMarker=this.markers[infodata.index];
         
           this.center=targetMarker.position;
           this.toggleInfoWindow(targetMarker,infodata)

          //  console.log(targetMarker);
        })
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
    
     this.emitter.on('getradius',(radius) => {
         this.radius=radius;
       
          return   this.$store.dispatch('AllRestaurant',{'center':this.center,'type':this.type,'radius':radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});
  
      })

    // var radius = (this.radius *1000);
    }
}
</script>
<style scoped>
.vue-map-container{
  height: 700px;
}
.cluster-0{
  border: 1px solid red !important;
}
</style>