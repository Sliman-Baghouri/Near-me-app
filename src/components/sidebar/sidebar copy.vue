<template>
   
                
     <div class="sidebar-compnet">
    <ul class="sidebar-tab" id="sidebar-tab">
      <!-- /whats_open -->
      <li>
        <router-link  to="/whats_open" class="border-right"> <i class="fa fa-bars" aria-hidden="true"></i>
      <div class=""> whats_open </div>
       </router-link>
      </li>
      <li>
        <router-link  to="/vendor" class="border-right">
        <i class="fa fa-truck" aria-hidden="true"></i>
      <div class="">Vendor</div>
      </router-link>
      
      </li>
    
      </ul>
  </div>
  <div>
<router-view/>
  </div>

 

</template>
<script>

export default {

    name:"sidebar-Component"
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
      font-size: 14px;
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
</style>

<style lang="scss" scoped>
.va-sidebar {
  flex-shrink: 0;
}

// .va-sidebar--minimized {
//   width: auto !important;
// }
</style>