<template>
  <div>
    
    <div class="map-component">
      
    <Map />
    </div>
    <div class="searchbar-component">
     <navbar />
    </div>
      <div class="main-sidebar-component">
      <sidebar />
      </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
import sidebar from "@/components/sidebar/sidebar.vue";
import Map from "@/components/map/map.vue";
export default {
    components:{
        navbar,
        sidebar,
        Map
    },
    data: () => ({
      drawer: true,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods:{

    },
   
  }
</script>
<style lang="scss" scoped>
.va-sidebar {
  flex-shrink: 0;
}

// .va-sidebar--minimized {
//   width: auto !important;
// }
</style>
