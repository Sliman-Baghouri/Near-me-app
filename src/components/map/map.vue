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
      styles: [
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },

        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#grey'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#F6BB7F'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#DEE2E7'}]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#DEE2E7' }]

        }

    ,{
    featureType: 'landscape',
    elementType: 'labels',
    stylers: [
      { 'visibility': 'off' }
    ]
  }
    ]
  }"
   map-type-id="roadmap"
   ref="myMapRef"
    style="width: 500px; height: 550px"
  >
    <!-- <GMapCluster> -->
 
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
    <!-- </GMapCluster> -->
    
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
            <i class="fa fa-plus icon-default"></i>
        </a>
        <ul class="floatingMenu">
            <li>
                <a href="https://foodtrucker.com.au/add-listing/?listing_type=catering-request" target="_blank">Place Catering Request 

                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m143.9375 382.8125c18.640625-14.515625 30.664062-37.148438 30.664062-62.546875 0-43.707031-35.5625-79.265625-79.269531-79.265625s-79.265625 35.558594-79.265625 79.265625c0 25.398437 12.023438 48.03125 30.660156 62.546875-26.304687 15.648438-46.726562 45.203125-46.726562 82.054688v32.132812c0 8.285156 6.714844 15 15 15h160.667969c8.28125 0 15-6.714844 15-15v-32.132812c0-36.84375-20.417969-66.402344-46.730469-82.054688zm-97.871094-62.546875c0-27.164063 22.101563-49.265625 49.269532-49.265625 27.164062 0 49.265624 22.101562 49.265624 49.265625 0 27.167969-22.101562 49.269531-49.265624 49.269531-27.167969 0-49.269532-22.101562-49.269532-49.269531zm114.601563 161.734375h-130.667969v-17.132812c0-36.085938 29.195312-65.332032 65.332031-65.332032 36.085938 0 65.332031 29.195313 65.332031 65.332032v17.132812zm0 0" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m448.800781 0h-192.800781c-34.90625 0-63.199219 28.242188-63.199219 63.199219v289.199219c0 12.269531 14.070313 19.445312 24 12l60.265625-45.199219h171.734375c34.90625 0 63.199219-28.242188 63.199219-63.199219v-192.800781c0-34.90625-28.242188-63.199219-63.199219-63.199219zm33.199219 256c0 18.351562-14.839844 33.199219-33.199219 33.199219h-176.734375c-3.246094 0-6.402344 1.054687-9 3l-40.265625 30.199219v-259.199219c0-18.351563 14.839844-33.199219 33.199219-33.199219h192.800781c18.351563 0 33.199219 14.839844 33.199219 33.199219zm0 0" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m432.734375 80.332031h-160.667969c-8.285156 0-15 6.71875-15 15 0 8.285157 6.714844 15 15 15h160.667969c8.28125 0 15-6.714843 15-15 0-8.28125-6.714844-15-15-15zm0 0" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m432.734375 144.601562h-160.667969c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h160.667969c8.28125 0 15-6.71875 15-15 0-8.285156-6.714844-15-15-15zm0 0" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m352.398438 208.867188h-80.332032c-8.285156 0-15 6.714843-15 15 0 8.285156 6.714844 15 15 15h80.332032c8.285156 0 15-6.714844 15-15 0-8.285157-6.714844-15-15-15zm0 0" fill="#ffffff" data-original="#000000" class=""/></g></svg>

                </a>
            </li>
            <li>
                <a href="https://foodtrucker.com.au/add-listing/?listing_type=event" target="_blank">List Your Event
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m456 48h-48v-8a24 24 0 0 0 -48 0v8h-80v-8a24 24 0 0 0 -48 0v8h-80v-8a24 24 0 0 0 -48 0v8h-48a40.045 40.045 0 0 0 -40 40v368a40.045 40.045 0 0 0 40 40h400a40.045 40.045 0 0 0 40-40v-368a40.045 40.045 0 0 0 -40-40zm-80-8a8 8 0 0 1 16 0v48a8 8 0 0 1 -16 0zm-128 0a8 8 0 0 1 16 0v48a8 8 0 0 1 -16 0zm-128 0a8 8 0 0 1 16 0v48a8 8 0 0 1 -16 0zm-64 24h48v24a24 24 0 0 0 48 0v-24h80v24a24 24 0 0 0 48 0v-24h80v24a24 24 0 0 0 48 0v-24h48a24.028 24.028 0 0 1 24 24v56h-448v-56a24.028 24.028 0 0 1 24-24zm400 416h-400a24.028 24.028 0 0 1 -24-24v-296h448v296a24.028 24.028 0 0 1 -24 24z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m440 216h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m280 376h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m200 216h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m120 296h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m200 296h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m120 376h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m200 376h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m369.208 248.983-40-6.112-17.966-38.271a8 8 0 0 0 -14.484 0l-17.958 38.271-40 6.112a8 8 0 0 0 -4.518 13.5l29.181 29.907-6.9 42.326a8 8 0 0 0 11.753 8.284l35.684-19.724 35.684 19.724a8 8 0 0 0 11.766-8.289l-6.9-42.326 29.181-29.907a8 8 0 0 0 -4.518-13.5zm-38.934 35.117a8 8 0 0 0 -2.17 6.875l4.9 30.051-25.136-13.9a8 8 0 0 0 -7.74 0l-25.136 13.9 4.9-30.051a8 8 0 0 0 -2.17-6.875l-21.122-21.652 28.833-4.4a8 8 0 0 0 6.033-4.509l12.534-26.711 12.535 26.706a8 8 0 0 0 6.033 4.509l28.833 4.4z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m440 296h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m440 376h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m360 376h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z" fill="#ffffff" data-original="#000000" class=""/></g></svg>


                </a>
            </li>
                <li>
                <a href="https://help.foodtrucker.com.au/" target="_blank">Help
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g>
<g xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M256,358.4c-5.652,0-10.24,4.588-10.24,10.24s4.588,10.24,10.24,10.24s10.24-4.588,10.24-10.24S261.652,358.4,256,358.4z" fill="#ffffff" data-original="#000000"/>
  </g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle cx="256" cy="368.64" r="20.48" fill="#ffffff" data-original="#000000"/>
  </g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M256,0C114.831,0,0,114.831,0,256s114.831,256,256,256s256-114.831,256-256S397.169,0,256,0z M256,491.52    C126.136,491.52,20.48,385.864,20.48,256S126.136,20.48,256,20.48S491.52,126.136,491.52,256S385.864,491.52,256,491.52z" fill="#ffffff" data-original="#000000"/>
  </g>
</g><g xmlns="http://www.w3.org/2000/svg">
 <g>
    <path d="M326.513,181.637c-5.059-28.856-28.754-52.552-57.61-57.631c-21.279-3.727-42.742,1.966-58.982,15.626    c-16.261,13.681-25.6,33.69-25.6,54.927c0,5.652,4.588,10.24,10.24,10.24s10.24-4.588,10.24-10.24    c0-15.176,6.677-29.471,18.309-39.219c11.796-9.892,26.829-13.865,42.271-11.141c20.521,3.604,37.376,20.48,41.001,41.001    c3.891,22.2-6.185,43.5-25.702,54.231c-21.873,12.063-34.918,32.891-34.918,57.528v20.48c0,5.652,4.588,10.24,10.24,10.24    s10.24-4.588,10.199-10.24v-22.282c0-15.278,9.114-29.409,24.33-37.806C317.419,242.565,331.878,212.132,326.513,181.637z" fill="#ffffff" data-original="#000000"/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg">
</g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>

                </a>
            </li>  
        </ul>
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
    //  center: { lat:0,lng:0},
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
   set_all_restaurant()
    {
          
   
           this.emitter.on('getresto', (restodata) => {
         this.infoWinOpen = false;
           this.allrestoData= restodata.data;
           this.mapdataType = restodata.status;

          //  console.log(this.mapdataType,this.allrestoData);

           this.AddMarkToFindLocation(this.allrestoData);

        })
    },
    // search location data  and related foodtruck location are set in setAutoSearchdata()
    setAutoSearchdata()
    {
      
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
                this.$store.dispatch('AllFoodtrucks',{'center':allStates[state.state]});
            }
      })
     
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

        console.log('hey fest',data);
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
          //  console.log(data[i].logo);
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
    setInfoContent()
    {
        this.emitter.on('marker_result_clicked',(infodata)=>{
          // console.log('markerrrsss',this.markers)
        
         var index = infodata.index;
           let targetMarker=this.markers[index];
           
           this.center=targetMarker.position;
           this.endLocation = targetMarker.position;
          
           this.toggleInfoWindow(targetMarker,infodata)

          //  console.log('this.ce',this.center.lat);
        })
    },
    //Note:open InfoWindow according to click foodtruck Information 
     toggleInfoWindow (marker, infoContent) {


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
           if(data)
           {
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

    checkRoute()
    { 
      
    
     var routename= this.$route.name;
    

  //  this.setautosearchstatus
      if(routename == 'vendor')
      {
        if(!this.searchStatus)
        {
            this.radius= 'any';
        }
        

        
     
        this.$store.dispatch('AllVendors',{"radius":this.radius,'center':this.center,'day':this.day});

      }
      else if(routename == 'whats-open')
      {
     
          this.$store.dispatch('AllRestaurant',{"radius":this.radius,'center':this.center,'day':this.day});
       
      }
      else if(routename == 'festivals')
      {
           this.$store.dispatch('Festivals',{"radius":this.radius,'center':this.center,'day':this.day});
        //  this.$store.dispatch('AllVendors',{"radius":this.radius,'center':this.center,'day':this.day});
      }
     

      
    
    }
 
   
  },
  
  

  created(){
    $(document).ready(function(){
        $('.floatingButton').on('click',
            function(e){


                e.preventDefault();
                $(this).toggleClass('open');
                if($(this).children('.fa').hasClass('fa-plus'))
                {
                    $(this).children('.fa').removeClass('fa-plus');
                    $(this).children('.fa').addClass('fa-plus');
                } 
                else if ($(this).children('.fa').hasClass('fa-close')) 
                {
                    $(this).children('.fa').removeClass('fa-plus');
                    $(this).children('.fa').addClass('fa-plus');
                }
                $('.floatingMenu').stop().slideToggle();
            }
        );
        $(this).on('click', function(e) {
          
            var container = $(".floatingButton");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
            {
                if(container.hasClass('open'))
                {
                    container.removeClass('open');
                }
                if (container.children('.fa').hasClass('fa-close')) 
                {
                    container.children('.fa').removeClass('fa-close');
                    container.children('.fa').addClass('fa-plus');
                }
                $('.floatingMenu').hide();
            }
          
            // if the target of the click isn't the container and a descendant of the menu
            if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) 
            {
                $('.floatingButton').removeClass('open');
                $('.floatingMenu').stop().slideToggle();
            } 
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
    display: block;
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
    border: 5px solid #F28F48;
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
  border: 1px solid #F28F48;
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
.floatingMenu li a svg{
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    margin-left: 8px;
    transform: translateY(3px);
}
.floatingMenu li a:hover {
    margin-right: 10px;
    text-decoration: none;
}

 
</style>