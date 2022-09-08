<template>
  <v-app>
    <v-main>
     
        <vue-progress-bar></vue-progress-bar>
      <router-view/>
      
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  
  data: () => ({
    //
  }),
  mounted(){
    
     this.$Progress.finish();
  },
  created(){
    
     this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        to,from;
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
         to,from;
        //  finish the progress bar
        this.$Progress.finish();
      });

    
  }
}
</script>
