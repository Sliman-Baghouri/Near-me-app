<template>
<div class="vendor-component sidebar-page-content">
     <div class="open-time-component">
      <div class="festival-open">
       </div>
        <div class="festival-distance">         
      
               <!-- By State -->
        <div class="stateSelect-original">

        <span class="time-txt ml-2 mr-2"> State </span>
          <span>
          <select v-model="state" class="timeselectBox stateSelect stateSelectFest" @change="getAllFestivals">  
           <option disabled value="select-a-state"> -- Select a state -- </option>            
            <option value="SA">SA</option>
            <option value="QLD">QLD</option>
            <option value="VIC">VIC</option>
            <option selected value="NSW">NSW</option>
            <option value="WA">WA</option>
          </select>
        </span>
      </div>
      </div>
      </div>
 <!-- {{festivals}} -->
<div class="all-vendor-list">
    <div v-if="allfestivals.length != 0">
    <div class="vendor-content d-flex sidebarbox-font" :class="{active: activeIndex == index}" @click="onToggle(index)"  v-for="(value, index) in allfestivals" :key="index">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
         <img :src="value.logo" >
      </div>
      <div class="vendor-details all-details"  >
        <a href="#" class="common-name-link festivals-link">{{value.name}}</a>
         <div class="location-font">

            <span  v-for="(food, index) in  value.categories" :key="index">
                    {{food.name}} ,
                  </span>
         </div>
          <div class="vendor-info icon-text-box"><i class="fa fa-map-marker" aria-hidden="true"></i>
             {{value.address}}
          </div>
          <div class="vendor-info icon-text-box">
            <i class="fa fa-clock"></i>
            <span class="map-clock-name">{{value.time}}</span>
          </div>
           <!-- <span><i class="fa fa-clock"></i></span>
            <font-awesome-icon icon="clock" />
            
            <span class="map-clock-name">{{value.time}}</span> -->
            <!-- </div> -->

      </div>
      
      </div>
</div>
<div  v-else >
    <div v-if="elementVisible" class="vendor-content d-flex sidebarbox-font">
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
    <div v-if="elementVisible"  class="vendor-content d-flex sidebarbox-font">
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

          <div v-if="elementVisible" class="vendor-content d-flex sidebarbox-font">
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


          <div v-if="elementVisible" class="vendor-content d-flex sidebarbox-font">
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
      <p :class="{ visible: elementVisible }">No listing was found</p>
</div>
      

  
  </div>    
</div>
</template>

<script>
// import $ from "jquery";

import { Skeleton } from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"


export default {
  name: 'vendor-component',
  components: {
    // MenuAccordion,
    // VueMultiselect,
    Skeleton
  },

  data() {
    return {
     festivals:"festivals",
     radius:6,
     elementVisible:true,
     activeIndex:null,
     openday:"today",
     state:'NSW'
    }
  },
  mounted(){
      this.emitter.on('markers_fetched',()=>{
       
        this.state = "select-a-state"  
                             let that = this;
             setTimeout(function(){
                that.elementVisible = false
                          console.log(this.elementVisible, 'shit')

            }, 5000)


      })



    this.getAllFestivals();
  },
  props: {
    msg: String
  },
  computed: {
    
     allfestivals(){
   

       var festivals= this.$store.getters.get_all_festivals;
      this.emitter.emit('getresto', {"data":festivals,"status":"festivals"})

      
       
        return festivals;
       }
  },
  methods:{
    getAllFestivals(){
    document.getElementById('searchTextField').value = ""
              // the below function don't work with festivals fix it asap.
              this.emitter.emit('mapFun', {state:this.state, type:'festivals'});
                  //  setTimeout(function(){ 
                  //       $('.festivals-link')[0].click(); 
                  // }, 3000);
         // this.emitter.emit('getAllFestivals',{"radius":this.radius,"status":"festivals","day":this.openday})
    },
    onToggle(index){
          window.scrollTo({top: 0, behavior: 'smooth'});
     
       if (this.activeIndex === index) {
          this.activeIndex = null;
          this.emitter.emit('marker_result_clicked',{'index':index,'show':false});
          
        } else {
          
           this.activeIndex = index;
           this.emitter.emit('marker_result_clicked',{'index':index,'show':true});
          
        }
         

    }
  },
  async created()
  {
      // var res = await this.axios.get("http://localhost:3000/festivals");
      // this.festivals = res.data;
      // this.emitter.emit('getresto', {"data":res.data,"status":"festivals"})
        // return data;

    // this.$store.dispatch('AllVendors');
  //  alert('re'); 
  }
}
</script>

<style>
.gm-style-moc{
    display: none !important
}

</style>