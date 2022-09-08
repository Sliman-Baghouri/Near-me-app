<template>
<div class="vendor-component">
 
<div class="all-vendor-list">
    <div class="vendor-content d-flex sidebarbox-font" v-for="(value, index) in AllVendors" :key="index">
      <div class="vendor-img">
         
         <img :src="require('../assets/profile.png')" >
      </div>
      <div class="vendor-details all-details"  >
        <a href="#" class="common-name-link">{{value.name}}</a>
         <div class="location-font">{{value.type}}</div>
          <div class="events icon-text-box"> {{value.events}}</div>
          <div class="vendor-info icon-text-box"><i class="fa fa-info-circle" aria-hidden="true"></i>
             {{value.inform}}
          </div>

      </div>
      
      </div>

      

  
  </div>    
</div>
</template>

<script>
export default {
  name: 'vendor-component',
  props: {
    msg: String
  },
  computed: {
    AllVendors()
    {
        return this.$store.getters.get_all_vedors;
        // return this.$store.state.tagslist;

    }
  },
  created()
  {
    this.$store.dispatch('AllVendors');
  //  alert('re'); 
  }
}
</script>