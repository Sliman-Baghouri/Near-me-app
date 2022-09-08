<template>
<div class="vendor-component sidebar-page-content">
 <div class="find-vendors">
   <div>
     <div class="time-txt">Within</div>
     <select class="timeselectBox" v-model="radius" @change="getallvedors">    
          <option value="1">1 Km</option>
						<option value="2"> 2Km</option>
						<option value="4">4 Km</option>
						<option value="6">6 Km</option>
            <option value="10">10 Km</option>
            <option value="15">15 Km</option>
						<option value="20">20 Km</option>
						<option value="30">30 Km</option>
            <option value="40">40 Km</option>
          
						<option value="any">Any Km  </option>
          </select>
   </div>

 </div>

<div class="all-vendor-list">
   <div v-if="AllVendors.length != 0">
    <div class="vendor-content d-flex sidebarbox-font " :class="{active: activeIndex == index}"  @click="onToggleLink(index)" :isActive="activeIndex === index" v-for="(value, index) in AllVendors" :key="index">
      <div class="resto-logo">
         <!-- <img :src="require('../assets/profile.png')" > -->
         <img :src="value.logo" >
      </div>
      <div class="vendor-details all-details"  >
        <a href="#" class="common-name-link">{{value.name}}</a>
        
         <div class="location-font">{{value.type}}</div>
          <p class="resto-location-font">
                  <span  v-for="(food, index) in  value.categories" :key="index">
                  <span v-if="index < 3">
                    {{food.name}} ,
                    </span>
                  </span>
                

                 </p>
          <div class="events icon-text-box"> {{value.events}}</div>
          <div class="vendor-info icon-text-box"><i class="fa fa-info-circle" aria-hidden="true"></i>
             {{value.description}}
          </div>

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
  data(){
return{
  radius:'any',
    activeIndex:null,
}
  },
  props: {
    msg: String
  },
  mounted()
  {
    this.getallvedors();
  },
  computed: {
    AllVendors()
    {
        var vendors = this.$store.getters.get_all_vedors;
        this.emitter.emit('getresto', {"data":vendors,"status":"vendors"})
        return this.$store.getters.get_all_vedors;

        // return this.$store.state.tagslist;

    }
  },
  methods:{
    getallvedors()
    {
        this.emitter.emit('getAllVendors',{"radius":this.radius,"status":"vendors"})
    },
    onToggleLink(index)
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
  created()
  {
 
  }
}
</script>