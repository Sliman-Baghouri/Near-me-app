<template>
  <div ref="map">
    <!-- coputedData -->
 <!-- <div v-show="coputedData">{{AllrestoData}}</div> -->
   <GMapMap
   
      :center="center"
      :zoom="zoom"
       :options="{
    zoomControl: false,
    mapTypeControl: mapTypeControl,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    disableDefaultUi: false,
    
  }"
  
      
      
        
   map-type-id="terrain"
   ref="myMapRef"


      style="width: 500px; height: 550px"
  >
    <!-- <GMapCluster> -->
       <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          
          :icon= '{
          url: m.icon,
          alt:"test",  
        
          scaledSize: {width: 35, height:35},
          labelOrigin: {x: 16, y: -10}
      }'
          @click="toggleInfoWindow(m,index)"
          
      >

      
       </GMapMarker>
    <!-- </GMapCluster> -->
    
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
    this.closeInfoModel();
    
  },
  
  data() {
    return {
    //  center: { lat:20.593684,lng:78.96288},
     center: { lat:39.9611755,lng:-82.99879419999999},
      shape : {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "circle",
  },

    
     zoom: 11,
    
     zoomControl: false,
     mapTypeControl:false,
     currentPlace: "",
     infoContents: '',
       markers: [],
       places: [],
       visible:{
          twoWay:false,
         default:false,
       },
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
    
  },
  methods:{
    closeInfoModel()
    {
        this.emitter.on('closeInfo',(data)=>{
            // console.log('close',data);
            this.infoWinOpen = data;
        })
    },
    set_all_restaurant()
    {
      

      this.emitter.on('getresto', (restodata) => {
       this.allrestoData= restodata;
      // console.log('getresr',restodata);
      this.AddMarkToFindLocation(this.allrestoData);

      })

     
    
    },
    setEventBus()
    {
     
      this.emitter.on('markers_fetched',(place)=>{
        
        this.currentPlace = place.placedata;
        console.log('placess',place.placedata);
        
        this.setSerchedLocation();

        // this.addMarker(place.allresto);
        this.AddMarkToFindLocation(place.allresto);
        
       

      })
    },
  geolocate: function() {
    //  alert(2);
    
     // navigator.geolocation.getCurrentPosition(position => {
      //   this.center = {
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude,
      //   };
      // });
      // this.markers.push({ position:  this.center})
      // console.log('this.center',this.center)
     
    },
    setSerchedLocation()
    {
        if (this.currentPlace) {
      this.markers = [];
      this.places = [];
        const currentmarker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        
        this.markers.push({ position:currentmarker });
        // console.log('markersss',this.markers);
        this.places.push(this.currentPlace);
        this.center = currentmarker;
        this.currentPlace = null;
      //   var radius = this.radius;
       
      //  this.$store.dispatch('AllRestaurant',{'center':this.center,'type':this.type,'radius':radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});
  

      }
    },
    AddMarkToFindLocation(data)
    {
      // data
      
      // this.markers = [];
      // this.places = [];
      var marker,i;
      data;
      marker
      if (this.currentPlace) {
       console.log('yes') 
       
      }
      else
      {
       
        // alert(3);
        for(i = 0; i < data.length; i++ )
        {
          
          // marker=data[i].geometry.location
          // var name=data[i].name,
        // console.log(data[i].lat);
          var foodtypedata=data[i].foodtype.split(',');
          this.markers.push({
             position:{
                  lat:Number(data[i].lat),
                  lng: Number(data[i].lng)
             },
              name:data[i].name,
              address:data[i].address,
              icon:data[i].icon,
              time:data[i].time,
              location:data[i].location,
              foodtype:foodtypedata,
              info:data[i].info,
              city:data[i].city,
              state:data[i].state,
              street:data[i].street
             })
        }
         }

    },
    toggleInfoWindow (marker, infoContent) {
        // alert(2);
        //  marker, infoContent
        
          // // console.log('isssd',marker);
          // // console.log('mar',marker)
            this.infoWindowPos = marker.position;
            this.infoContents = marker;
             console.log('marker',this.infoContents);

            
          //   // //check if its the same marker that was selected if yes toggle
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
          console.log('markerrrsss',this.markers)
         var index = infodata.index +1;
           let targetMarker=this.markers[index];
          
         
          

           this.center=targetMarker.position;
          
           this.toggleInfoWindow(targetMarker,infodata)

          //  console.log('this.ce',this.center.lat);
        })
    },

    
    addMarker() {
    //  data
      // if (this.currentPlace) {
      //   const currentmarker = {
      //     lat: this.currentPlace.geometry.location.lat(),
      //     lng: this.currentPlace.geometry.location.lng(),
      //   };
      //    for( var i = 0; i < data.length; i++ ){
             
      //         // console.log(i);
      //        const marker = {
      //         lat: data[i].lat,
      //         lng: data[i].lng,
      //       };
      //       this.markers.push({ position: marker });
           
      //   }
       
      //   // this.markers.push({ position: marker });
      //   this.places.push(this.currentPlace);
      //   this.center = currentmarker;
      //   this.currentPlace = null;
      // }
      
    },

  },

  created()
  {
    
    // console.log('test',this.$refs.myMapRef);
     this.emitter.on('getradius',(radius) => {
         this.radius=radius;
       
           // return   this.$store.dispatch('AllRestaurant',{'center':this.center,'type':this.type,'radius':radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});
          return   this.$store.dispatch('AllRestaurant');
  
        })

    // var radius = (this.radius *1000);
    }
}
</script>
<style scoped>

</style>