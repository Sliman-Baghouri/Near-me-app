<template>
  <div id="vue-map">
    <div class="map-errors-div">

<div class="loading-overlay" v-show='showloader'>
  <span class="fas fa-spinner fa-3x fa-spin"></span>
</div>


    </div>
   
   <GMapMap id="googless"
   
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
    gestureHandling: 'greedy',
      styles: [
    {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#444444'
            }
        ]
    },
    {
        'featureType': 'administrative.locality',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#f2f2f2'
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
            {
                'visibility': 'simplified'
            },
            {
                'saturation': '-65'
            },
            {
                'lightness': '45'
            },
            {
                'gamma': '1.78'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 45
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
            {
                'saturation': '-33'
            },
            {
                'lightness': '22'
            },
            {
                'gamma': '2.08'
            }
        ]
    },
    {
        'featureType': 'transit.station.airport',
        'elementType': 'geometry',
        'stylers': [
            {
                'gamma': '2.08'
            },
            {
                'hue': '#ffa200'
            }
        ]
    },
    {
      featureType: 'transit.station.bus',
      stylers:  [{ 'visibility': 'off' }]
    },

    {
        'featureType': 'transit.station.airport',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit.station.rail',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit.station.rail',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'simplified'
            },
            {
                'saturation': '-55'
            },
            {
                'lightness': '-2'
            },
            {
                'gamma': '1.88'
            },
            {
                'hue': '#ffab00'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#bbd9e5'
            },
            {
                'visibility': 'simplified'
            }
        ]
    }
]
  }"
   map-type-id="roadmap"
   ref="myMapRef"
    style="width: 500px; height: 550px"
  >
    <GMapCluster 
                  :styles="[
          {
            textColor: 'black',
            url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m1.png',
            height: 52,
            width: 53,
            fontWeight:'bold',
          },
          {
            textColor: 'black',
            url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m2.png',
            height: 55,
            width: 56,
            fontWeight:'bold',
          },
          {
            textColor: 'black',
            url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m3.png',
            height: 65,
            width: 66,
            fontWeight:'bold',
          },
          {
            textColor: 'black',
            url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m4.png',
            height: 77,
            width: 78,
            fontWeight:'bold',
          },
          {
            textColor: 'black',
            url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m5.png',
            height: 89,
            width: 90,
            fontWeight:'bold',
          },
        ]"


    >
 
       <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
         :icon= '{
          url: m.icon,
          alt:"foodtrucker",  
        className: "my-box",

          // shape:{coords:[17,17,18],type:"circle"},
          scaledSize: {width: 50, height:50},
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



<div class="floatingButtonWrap ">
    <div class="floatingButtonInner ">
     <a href="#" class="floatingButton circle">

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="28" height="28" x="0" y="0" viewBox="0 0 1550 1550" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g><path d="m1519 751h-319.3c-11.5-68.8-71.4-121.4-143.4-121.4s-131.9 52.6-143.4 121.4h-881.9c-13.3 0-24 10.7-24 24s10.8 24 24 24h881.9c11.5 68.8 71.4 121.4 143.4 121.4s131.9-52.6 143.4-121.4h319.3c13.3 0 24-10.8 24-24 0-13.3-10.7-24-24-24z" fill="#ffffff" data-original="#000000" class=""></path><path d="m1519 1291.5h-904.7c-11.5-68.8-71.4-121.4-143.4-121.4s-131.9 52.6-143.4 121.4h-296.5c-13.3 0-24 10.8-24 24 0 13.3 10.8 24 24 24h296.5c11.5 68.8 71.4 121.4 143.4 121.4s131.9-52.6 143.4-121.4h904.7c13.3 0 24-10.7 24-24s-10.7-24-24-24z" fill="#ffffff" data-original="#000000" class=""></path><path d="m31 258.5h336.3c11.5 68.8 71.4 121.4 143.4 121.4s131.9-52.6 143.4-121.4h864.9c13.3 0 24-10.8 24-24 0-13.3-10.8-24-24-24h-864.9c-11.5-68.8-71.4-121.4-143.4-121.4s-132 52.6-143.4 121.4h-336.3c-13.3 0-24 10.7-24 24s10.8 24 24 24z" fill="#ffffff" data-original="#000000" class=""></path></g></g></svg>
        </a>
    </div>
</div>
  
</template>

<script>
import $ from "jquery";
   /* eslint-disable no-undef */

   
// import DirectionsRenderer from "./DirectionsRenderer.js";
import InfoContent from './InfoContent.vue'
export default {
  name: 'App',
  components:{
    InfoContent,
    // DirectionsRenderer
  },
  mounted() {
    this.getOpenRestaurent();
    this.getALLVendors();
    this.getAllFestivals();
    this.setAutoSearchdata();
    this.set_all_restaurant();
    this.setInfoContent();

    // this.closeInfoModel();
    this.getcurrentlocationByclickGPS();
    this.findDistance();
    this.byState();
    
  },
  
  data() {
    return {
    center: { lat:-33.8688197,lng:151.2092955},
    defaultC:{ lat:-33.8688197,lng:151.2092955},
    defaultR:2000000000000,
    defaultF:{ lat:22.2943706,lng:73.1540819},    
     // center: { lat:0,lng:0},
     currentlocation:{ lat:-37.8136276,lng:144.9630576},
      shape : {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "circle",
  },
    showloader:false,
    activator:true,
    props:{ "aria-haspopup": "dialog", "aria-expanded": "true" } ,
    isActive:true,
     zoom: 13,
     searchStatus:false,
    startLocation:'',
    endLocation:'',
     zoomControl: true,
     mapTypeControl:false,
     currentPlace: "",
     infoContents: '',
    travelMode:"",
     mapdataType:"",
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
          radius:6,
          day:'today',
           currentMidx: null,
          type:'restaurant',
          allrestoData:'',
          coputedData:false,
    }
  },
  computed:{
    
  },
  methods:{
    alertIt(){
        console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggg')
    },
     geolocate(){
       
            this.infoWinOpen = false;
            this.searchStatus =false;

            navigator.geolocation.getCurrentPosition(position => {
                 this.center = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                this.currentlocation = this.center;

                this.checkRoute();

                   var google_map_pos = new google.maps.LatLng( this.center.lat, this.center.lng );
                var google_maps_geocoder = new google.maps.Geocoder();
google_maps_geocoder.geocode(
    { 'latLng': google_map_pos },
                 function( results, status ) {
                        if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
                            $("#searchTextField").val(results[0].formatted_address);
                        }
                    }
);
              
               
              //  this.markers.push({ position:this.center})
                this.callback(this.center);

              });
             
    },
    callback(currentlocation)
    {
        
        this.currentlocation = currentlocation;
        this.startLocation = currentlocation;
        // console.log("currentlocation",currentlocation);
    },
    // set_all_restaurant is set restoraunt marker on map 
   set_all_restaurant(){
          
   
           this.emitter.on('getresto', (restodata) => {
         this.infoWinOpen = false;
           this.allrestoData= restodata.data;
           this.mapdataType = restodata.status;

           // console.log('heyyyyyy',this.allrestoData);

           this.AddMarkToFindLocation(this.allrestoData);

        })
    },
    // search location data  and related foodtruck location are set in setAutoSearchdata()
    setAutoSearchdata(){
      this.emitter.on('markers_fetched',(place)=>{
        
        this.currentPlace = place.placedata;
        this.searchStatus = true;
        this.setSerchedLocation();
        this.checkRoute();
     
        
       

      })
    },
      
      byState(){

        let allStates = {
            VIC: {lat: -37.8136276,lng: 144.9630576},
            QLD: {lat:-27.4704528, lng:153.0260341},
            NSW: {lat: -33.8688197,lng: 151.2092955},
            SA:  {lat: -34.9284989, lng: 138.6007456},
            WA:  {lat:-31.953512,   lng:115.857048}
        } 

     this.emitter.on('mapFun',(state)=>{ 
            console.log(state)

            if(state.type.includes('festivals')){
                this.$store.dispatch('Festivals',{'center':allStates[state.state]})

            }else{
                console.log('==========> fired')
                this.$store.dispatch('AllFoodtrucks',{'center':allStates[state.state]});
            }
      })
     
    },

    byGallery(){

    },

    setSerchedLocation(){
        if (this.currentPlace) {
      this.markers = [];
      this.places = [];
        const currentmarker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        console.log("search position:");
        console.log(currentmarker);
        
        
       // this.markers.push({ position:currentmarker });
        this.places.push(this.currentPlace);
        this.center = currentmarker;
        this.currentPlace = null;
      //   var radius = this.radius;
       
      //  this.$store.dispatch('AllRestaurant',{'center':this.center,'type':this.type,'radius':radius,'key':'AIzaSyC4YvwdY38BgGtKeDeFc616p9LZvm9K6HU'});
  


      }
    },
     AddMarkToFindLocation(data){

        console.log('------------------------------------------------');
       this.markers = [];
      var marker,i;
      data;
      marker
      if (this.currentPlace) {
       console.log('yes') 
       }
      else
      {
       
       /*
         if(this.searchStatus)
         {
           this.markers.push({position:this.center})
         }
         else if(this.searchStatus == false)
         {
           this.markers.push({position:this.currentlocation})

         }

*/
        for(i = 0; i < data.length; i++ ){
           // console.log(data[i], 'daaaaaaaaaaaaaaaaaaaam');
          // var foodtypedata=data[i].foodtype.split(',');
          this.markers.push({
             position:{
                  lat:Number(data[i].lat),
                  lng: Number(data[i].lng)
             },
             infotype:this.mapdataType,
              name:data[i].name,
              address:data[i].address,
             
              icon:data[i].logo,
              time:data[i].time,
              url:data[i].url,
              location:data[i].location,
              foodtype:data[i].categories,
              info:data[i].info,
              city:data[i].city,
              state:data[i].state,
              street:data[i].street
             })

              // this.markers.push({position})
        }

        // console.log("this.markersthis.markers",this.markers);
         }

    },
    //click open foodtruck and set all information in infocontent 
    setInfoContent(){
        this.emitter.on('marker_result_clicked',(infodata)=>{
          console.log('markerrrsss',this.markers)

          $('.sidebar-component').toggleClass('switchNav')
         var index = infodata.index;
           let targetMarker=this.markers[index];
           
           this.center = targetMarker.position;
           console.log(this.center, 'lat,lng')
           this.endLocation = targetMarker.position;
          
           this.toggleInfoWindow(targetMarker,infodata)

          //  console.log('this.ce',this.center.lat);
        })
    },
    //Note:open InfoWindow according to click foodtruck Information 
     toggleInfoWindow (marker, infoContent) {

          this.emitter.emit('fetchSliderImages', {info:marker.url});

        

/*
       console.log(infoContent);
       console.log(this.currentMidx);
       console.log(marker);

        console.log(this.markers);
        */

          this.infoWindowPos = marker.position;
            this.infoContents = marker;
            // console.log(this.infoWinOpen);
        //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == infoContent.index) {
                this.infoWinOpen = !this.infoWinOpen;
            }
             //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = infoContent.index;

            }
        },
    // set event when we click GPS icon to set current location
    getcurrentlocationByclickGPS()
    {
       this.emitter.on('getcurrent_location',(data)=>{
          if(data.currentlocation)
          {
              this.geolocate();
              
             if(!this.currentlocation)
              {
                alert("please start your browser location");
              }

              
              
          }
           
   
        })
    },
    findDistance(){
        // this findDistance function is now closing the info windows change this later to its own function
         this.emitter.on('findDistance',()=>{
                this.infoWinOpen = false;

           // if(data)
           // {
           //  //  console.log("this.startLocation",this.startLocation);
           //   if(!this.startLocation) 
           //   {
           //     alert("please start your browser location");
              
           //   }
           //   else
           //   {
           //    var href="https://www.google.com/maps/dir/?api=1&origin="+this.startLocation.lat+","+this.startLocation.lng+"&destination="+this.endLocation.lat+","+this.endLocation.lng+"";
           //    window.open(href);   
           //   }
             
           //   }


        })
          
           
    },



    closeBtn(){
        this.emitter.on('closeBtn',()=>{
         console.log('closed')
        })
    },
    getALLVendors(){
       this.emitter.on('getAllVendors',(data)=>{
           if(data){
            //  console.log('vendordata',data);
             this.radius=data.radius;
    
             
              return this.$store.dispatch('AllVendors',{"radius":this.radius,'center':this.center,'day':this.day});
              
            }


        })
    },
    getAllFestivals()
    {

        this.emitter.on('getAllFestivals',(data)=>{
          
               this.day = data.day;
              this.mapdataType=data.status;
               this.radius = data.radius; 
              this.$store.dispatch('Festivals',{"radius":this.radius,'center':this.center,'day':data.day});
        
       

       });
      
    },
    getOpenRestaurent(){
        this.emitter.on('getOpenRestaurent',(data)=>{
           if(data){
              this.day = data.day;
              this.mapdataType=data.status;
               this.radius = data.radius; 
             return   this.$store.dispatch('AllRestaurant',{"cuisine":data.cuisine, "radius":this.radius,'center':this.center,'day':this.day});
              
            }


        })
    },

    checkRoute(){ 
      
    
     var routename= this.$route.name;
    

  //  this.setautosearchstatus
      if(routename == 'vendor')
      {
        if(!this.searchStatus)
        {
            this.radius= 'any';
        }
        

        
     
          this.$store.dispatch('AllRestaurant',{"radius":this.radius,'center':this.center,'day':this.day});

      }
      else if(routename == 'whats-open'){
     
          this.$store.dispatch('AllRestaurant',{"radius":this.radius,'center':this.center,'day':this.day});
       
      }
      else if(routename == 'festivals'){
           this.$store.dispatch('Festivals',{"radius":this.radius,'center':this.center,'day':this.day});
        //  this.$store.dispatch('AllVendors',{"radius":this.radius,'center':this.center,'day':this.day});
      }
     

      
    
    }
 
   
  },
  
  

  created(){
    $(document).ready(function(){
        $('.floatingButton').on('click', function(e){


                e.preventDefault();
                $('.sidebar-component').toggleClass('switchNav')
         });

        $("#searchTextField").focus(function(){
            $(this).val("")

        });

    });
   
     this.geolocate()
     this.checkRoute();
     
    //  this.showloader=false;
    
    //  const autocomplete = new this.$google.this.maps.places.Autocomplete();
    // console.log(autocomplete);
  
       
      

    // var radius = (this.radius *1000);
    }
    
}


</script>

<style scoped>
.floatingButtonWrap {
    display: none;
    position: fixed;
    bottom: 45px;
    right: 45px;
    z-index: 999999999;
}

.floatingButtonInner {
    position: relative;
}

.floatingButton {
    display: block;
    width: 60px;
    height: 60px;
    text-align: center;
    background: #F28F48;
    color: #fff;
    line-height: 50px;
    position: absolute;
    border-radius: 50% 50%;
    bottom: 0px;
    right: 0px;
    box-shadow: 0px 4px 14px rgb(0 0 0 / 30%);
    opacity: 1;
    transition: all 0.2s;
}

.floatingButton .fa {
    font-size: 15px !important;
}

.floatingButton.open,
.floatingButton:hover,
.floatingButton:focus,
.floatingButton:active {
    opacity: 1;
    color: #fff;
}

.circle:before,
.circle:after {
  content: '';
  display: block;
  position: absolute;
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  border: 1px solid orange;
  border-radius: 50%;
}


.circle:before {
  animation: ripple 2s linear infinite;
}

.circle:after {
  animation: ripple 2s linear 1s infinite;
}

@keyframes ripple{
  0% { transform: scale(1.2); }
  50% { transform: scale(1.5); opacity:1; }
  100% { transform: scale(1.7); opacity:0; }
}


.floatingButton .fa {
    transform: rotate(0deg);
    transition: all 0.2s;
}

.floatingButton.open .fa {
    transform: rotate(270deg);
}

.floatingMenu {
    position: absolute;
    bottom: 60px;
    right: 0px;
    /* width: 200px; */
    display: none;
}

.floatingMenu li {
    width: 100%;
    float: right;
    list-style: none;
    text-align: right;
    margin-bottom: 5px;
}

.floatingMenu li a {
    padding: 8px 15px;
    display: inline-block;
    background: #F28F48;
    color: #FFF;
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s;
    /* -webkit-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.22);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.22); */
    -webkit-box-shadow: 1px 3px 5px rgba(211, 224, 255, 0.5);
    box-shadow: 1px 3px 5px rgba(211, 224, 255, 0.5);
}
.floatingButton svg{

    margin-top: 13px;
}
.floatingMenu li a:hover {
    margin-right: 10px;
    text-decoration: none;
}

 
</style>