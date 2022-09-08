<template>
<div class="vendor-component sidebar-page-content">
     <div class="open-time-component">
      <div class="festival-open">
      <p class="time-txt mr-2"> Show Events </p>
        
          <select class="timeselectBox" v-model="openday" @change="getAllFestivals">
         <option value="today">Today</option>
          <!-- <option value="tomorrow">Tomorrow</option> -->
          <option value="thisweek">This Week</option>
          <option value="thisweekned">This Weekend</option>
          <option value="nextweek">Next Week</option>
          </select>
       </div>
        <div class="festival-distance">
          <p class="time-txt ml-2 mr-2"> Within </p>
         
          <select class="timeselectBox" v-model="radius" @change="getAllFestivals">    
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
<div v-else>
 No data found
</div>
      

  
  </div>    
</div>
</template>

<script>
export default {
  name: 'vendor-component',
  data() {
    return {
     festivals:"festivals",
     radius:6,
     activeIndex:null,
     openday:"today"
    }
  },
  mounted()
  {
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
    getAllFestivals()
    {
         this.emitter.emit('getAllFestivals',{"radius":this.radius,"status":"festivals","day":this.openday})
    },
    onToggle(index)
    {
     
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