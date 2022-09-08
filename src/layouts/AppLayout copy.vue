<template>

  <v-app>
      <navbar />

    <v-navigation-drawer permanent  v-model="drawer"
        bottom
        temporary>
        <sidebar />
     </v-navigation-drawer>

    <v-main class="main-container" style="position: relative; width:1200px !important ; padding: 0; left: 20rem;" >
      
 <Map />

    </v-main>
  </v-app>


</template>

<script>
// import navbar from "@/components/navbar/navbar.vue";
import sidebar from "@/components/sidebar/sidebar.vue";
import Map from "@/components/map/map.vue";
export default {
    components:{
        // navbar,
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

<style lang="scss">
.border-right{
  border-right:0 !important;
}
.sidebar-compnet{
  width:20rem
}

// #2683cb
.sidebar-tab li{
  display: inline-block;
      text-align: center;
      // border: 1px solid red;
       width: 50%;
     
}
.sidebar-tab li a{
  
  border: 1px solid #2275b6;
  display: block;
  padding: 5.5px 21.2px;
  background:#2683cb;
  color:#fff
}
.va-sidebar {
  .va-collapse__body {
    margin-top: 0 !important;
  }

  &__menu {
    padding: 0rem 0;
    &__inner {
      padding-bottom: 8rem;
    }
  }

  &-item {
    &-content {
      padding: 0.75rem 1rem;
    }

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.v-main .main-container{
  
    top: 45px;
}
</style>

<style lang="scss" scoped>
.va-sidebar {
  flex-shrink: 0;
}

// .va-sidebar--minimized {
//   width: auto !important;
// }
</style>
