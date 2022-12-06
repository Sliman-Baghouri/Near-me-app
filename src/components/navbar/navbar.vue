<template>
         <div class="search-text search-text-mobile">
             <div class="stateSelect-nav">
               <span class="time-txt ml-2 mr-2"> State </span>
                        <span>
                        <select class="timeselectBox stateSelect " v-model="state" @change="getFoodtrucksByState" >
                         <option disabled value="select-a-state"> -- Select a state -- </option>              
                          <option value="SA">SA</option>
                          <option value="QLD">QLD</option>
                          <option value="VIC">VIC</option>
                          <option value="NSW">NSW</option>
                          <option value="WA">WA</option>
                        </select>
                    </span>
              </div>
          <GMapAutocomplete
                  value=""
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
            <div class="mobile-navigation">
              <div class="ul-navigation">
               <ul class="sidebar-tabs sidebar-nav-tabs">
                <li><router-link  to="/vendors" class="border-right">
                <img :src="require('../../assets/icons/shop.png')" >
                <span>Vendors</span></router-link></li>       
                <li><router-link  to="/festivals" class="border-right">
                <img :src="require('../../assets/icons/confetti.png')" >
                <span>Festivals</span></router-link></li>
                <li><router-link  to="/whats-open" class="border-right">
                <img :src="require('../../assets/icons/open-sign.png')" >
                <span>Whats open</span> </router-link></li>   
                </ul>
              </div>
          
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
      searched:false,
            state:'NSW',

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
     getAllFestivals(){
    document.getElementById('searchTextField').value = ""
              // the below function don't work with festivals fix it asap.
              this.emitter.emit('mapFun', {state:this.state, type:'festivals'});
                  //  setTimeout(function(){ 
                  //       $('.festivals-link')[0].click(); 
                  // }, 3000);
         // this.emitter.emit('getAllFestivals',{"radius":this.radius,"status":"festivals","day":this.openday})
    },

    getFoodtrucksByState(){
      if(document.querySelector('.sidebar-tabs .router-link-active').textContent == "Festivals"){
                      this.emitter.emit('mapFun', {state:this.state, type:'festivals'});

                      console.warn(document.getElementById('searchTextField'), document.getElementById('searchTextField').value )


      }else{
  // empty navbar's input value when a state is changed
    document.getElementById('searchTextField').value = ""

      // console.log(this.radius);


                  // let typeClass = $(this).attr('class');

                  // that.emitter.emit('mapFun', {state:$(this).val(), type:typeClass});
                  //    setTimeout(function(){ 
                  //         if(typeClass.includes('stateSelectFest')){
                  //           $('.festivals-link')[0].click(); 
                  //         }else{
                  //           $('.resto-name-link')[0].click(); 
                  //         }
                  //   }, 3000);


                  // if($(this).hasClass('stateSelectFest')){
                  //   that.emitter.emit('mapFun', {state:$(this).val()});
                  //    setTimeout(function(){ 
                  //         $('.festivals-link')[0].click(); 
                  //   }, 2000);

                  // }else{
                    // console.warn(this.state)
                   this.emitter.emit('mapFun', {state:this.state, type:'foodtruck'});
                  //  setTimeout(function(){ 
                  //       $('.resto-name-link')[0].click(); 
                  // }, 1000);


                  // }
  



      // this.emitter.emit('getOpenRestaurent',{"radius":this.radius,'day':this.openday,"status":"resturent"})

      }
    },
   
  },

  created(){  
    let that = this;

  }
}


</script>
