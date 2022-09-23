<template>
<div class="vendor-component sidebar-page-content">
     <div class="open-time-component">
      <div class="festival-open">
       </div>
        <div class="festival-distance">         
      
               <!-- By State -->

        <span class="time-txt ml-2 mr-2"> State </span>
          <span>
          <select v-model="state" class="timeselectBox stateSelect stateSelectFest" @change="getAllFestivals">    
            <option value="SA">SA</option>
            <option value="QLD">QLD</option>
            <option value="VIC">VIC</option>
            <option selected value="NSW">NSW</option>
            <option value="WA">WA</option>
          </select>
        </span>
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
// import $ from "jquery";

export default {
  name: 'vendor-component',
  data() {
    return {
     festivals:"festivals",
     radius:6,
     activeIndex:null,
     openday:"today",
     state:'NSW'
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
    getAllFestivals(){

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