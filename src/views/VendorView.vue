<template>
    <div class="sidebar-page-content">
       <div class="open-time-component">
     <!--  <span class="time-txt mr-2"> Open </span>
        <span>
          <select class="timeselectBox" v-model="openday" @change="getRestaurent">
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="withinaweek">This Week</option>
          </select>
       </span>
          <span class="time-txt ml-2 mr-2"> Within </span>
          <span>
          <select class="timeselectBox" v-model="radius" @change="getRestaurent">    
            <option value="1">1 Km</option>
            <option value="2"> 2Km</option>
            <option value="4">4 Km</option>
            <option value="6">6 Km</option>
            <option value="10">10 Km</option>
            <option value="15">15 Km</option>
            <option value="20">20 Km</option>
            <option value="30">30 Km</option>
            <option value="40">40 Km</option>
          </select>
        </span> -->
        <!-- By State -->

        <span class="time-txt ml-2 mr-2"> State </span>
          <span>
          <select class="timeselectBox stateSelect" v-model="state" @change="getFoodtrucksByState" >
           <option disabled value="select-a-state"> -- Select a state -- </option>              
            <option value="SA">SA</option>
            <option value="QLD">QLD</option>
            <option value="VIC">VIC</option>
            <option value="NSW">NSW</option>
            <option value="WA">WA</option>
          </select>

      </span>
            <br>
      <span class="time-txt" style="margin-bottom:5px;margin-top:5px;display: block;">Filter By Cuisine</span>

        <Multiselect  autocomplete="off" v-model="value" :options="options" mode="tags" :searchable="true" @change="filterChanged" />

      </div>
   
     <div>

  </div>

  <div class="all-resto-list-component">
    <!-- <div class="count-open-resto">
        <span>Today(4/2)</span>
    </div> -->

    <div class="inner-resto-list-component">
      <!-- resto list  -->
      
       <div  v-if="AllRestaurant.length != 0">
        
      <div class="resto-detail-container" :class="{active: activeIndex == index}" @click="onToggle(value,index)" :isActive="activeIndex === index"  v-for="(value, index) in AllRestaurant" :key="index"  
      >
        <div class="inner-detail-contailer d-flex">

          <div class="resto-logo">
           <img :src="value.logo" >
            <!-- <img :src="require('../assets/profile.png')" > -->
           <!-- <img :src=require('../../public/img/profile.png') > -->
            </div>
            <div class="all-details-block sidebarbox-font ">
              <div class="resto-title-block">
                <a href="#" class="resto-name-link common-name-link">{{value.name}}</a>
                <!-- <span class="distance">{{value.distance}}</span> -->
              </div>
               <div class="resto-location">
               <p class="resto-location-font">
                  <span  v-for="(food, index) in  value.categories" :key="index">
                    {{food.name}} ,
                  </span>
                

                 </p>
             </div>
              <div class="map-location icon-text-box">
              <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
              <span class="map-location-name">{{value.address.substring(0,25)+".."}}</span>
             
            </div>
            <div class="icon-text-box">
            <!-- <span> value.vicinity.substring(0,50)+".."<i class="fa-solid fas-clock"></i></span> -->
            <!-- <font-awesome-icon icon="fa-solid fa-clock" /> -->
           <span><i class="fa fa-clock"></i></span>
            <font-awesome-icon icon="clock" />
            
            <span class="map-clock-name">{{value.time}}</span>
            </div>


            </div>
           

          </div>
           <div class="order-ahead" v-if="value.OrderAhead">
             <div>
               <a href="#">Order Ahead</a>
             </div>

           </div>


      </div>
      </div>
<div  v-else >
    <div  v-show="elementVisible" class="vendor-content d-flex sidebarbox-font">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
        <Skeleton circle :count="1" height="55px" width="55px"> </Skeleton> 
      </div>
      <div class="vendor-details all-details">
        <a href="#" class="common-name-link festivals-link">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 
      </a>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>

      </div>
      
      </div>
    <div  v-show="elementVisible" class="vendor-content d-flex sidebarbox-font">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
        <Skeleton circle :count="1" height="55px" width="55px"> </Skeleton> 
      </div>
      <div class="vendor-details all-details">
        <a href="#" class="common-name-link festivals-link">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 
      </a>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>

      </div>
      
      </div>

          <div  v-show="elementVisible" class="vendor-content d-flex sidebarbox-font">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
        <Skeleton circle :count="1" height="55px" width="55px"> </Skeleton> 
      </div>
      <div class="vendor-details all-details">
        <a href="#" class="common-name-link festivals-link">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 
      </a>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>

      </div>
      
      </div>


          <div   v-show="elementVisible" class="vendor-content d-flex sidebarbox-font">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
        <Skeleton circle :count="1" height="55px" width="55px"> </Skeleton> 
      </div>
      <div class="vendor-details all-details">
        <a href="#" class="common-name-link festivals-link">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 
      </a>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>
         <div class="location-font">
          <Skeleton :count="1" height="10px" width="180px"> </Skeleton> 

         </div>

      </div>
      
      </div>
      <p>No listing was found</p>
</div>
      <div >

      </div>

      <!-- end resto list -->
          </div>
  </div>
    

    </div>

</template>
<script>
// import $ from "jquery";
  import Multiselect from '@vueform/multiselect'
import { Skeleton } from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"


export default {
  name: "app-sidebar",
   mounted() {  
     this.getRestaurent();

      this.emitter.on('markers_fetched',()=>{
           
         this.state = "select-a-state"  
      })
  
   },
  components: {
    // MenuAccordion,
    // MenuMinimized,
      Multiselect,
      Skeleton
  },

  data() {
    return {
      elementVisible: true,
      activeIndex:null,
      radius:6,
      openday:'today',
      state:'NSW',
      places:[],
      options: ['BBQ', 'Coffee', 'Desserts', "Greek", "Mexican", "Burgers and Hotdogs", "Finger food", "Vegetarian","Vietnamese", "Japanese", "Vegan", "Donuts", "Spanish","Brazilian","Bubble tea","Fish and chips","French"," German Food","Gluten free","Ice cream","Indian"]

    }
  },
  created() {
  },

  computed: {
    AllRestaurant()
    {
     
      var resto = this.$store.getters.get_all_restaurant
      this.emitter.emit('getresto', {"data":resto,"status":"foodtruck"})
        return resto;
    }
  },
  methods:{
   
     getRestaurent(cuisine){

      this.emitter.emit('getOpenRestaurent',{"cuisine": cuisine, "radius":this.radius,'day':this.openday,"status":"resturent"})

      console.log('cuisines:',cuisine)

    },
    filterChanged(value){
      this.getRestaurent(value)
            setTimeout(() => this.elementVisible = false, 1000)

    },

    getFoodtrucksByState(){
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
    },
   
    onToggle(value,index){

                window.scrollTo({top: 0, behavior: 'smooth'});

     
       if (this.activeIndex === index) {
          // console.log("whatopen this.activeIndex",this.activeIndex , index)
          // console.log("noactive");
          this.activeIndex = null;
          this.emitter.emit('marker_result_clicked',{'index':index,'show':false});
          
        } else {
          //  console.log("whatsopen this.activeIndex",this.activeIndex ,index)
          //  console.log("active");
           this.activeIndex = index;
           this.emitter.emit('marker_result_clicked',{'index':index,'show':true});
          
        }
         

    }
  }


};
</script>
<style>

.gm-style-moc{
    display: none !important
}

.stateSelect{
  width: 113px !important;
}
</style>