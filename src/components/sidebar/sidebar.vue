<template>
   
       <div class="sidebar-component draggable" id="hit_div">       
         <div class="inner-sidebar">  
     <div class="inner-sidebar-compnet dragger">
       <!-- start logo component -->
         <div class="sidebar-logo-component d-flex justify-content-between align-items-center">
         <div class="logo-img"><img  :src="require('../../assets/icons/Fb-Logo-removebg-preview.png')" /></div>
         <!-- <div class="list-business-bar"><input type="text" placeholder="List your business"/></div> -->
         <!-- <br> -->
         <div class="list-business-bar"><a href="https://www.foodtrucker.com.au/add-listing/?listing_type=foodtruck" target="_blank">List Your Business <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.5L17 9.5L10 17.5M1 9.5H17H1Z" stroke="#F28F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a></div>
       </div>     
<!-- end logo component -->
        
        <div class="sidebar-tabs-container">
            <ul class="sidebar-tabs">
            <li><router-link  to="/vendors" class="border-right">Vendors</router-link></li>       
            <li><router-link  to="/festivals" class="border-right">Festivals</router-link></li>
            <li><router-link  to="/whats-open" class="border-right">Whats open</router-link></li>   
            </ul>
             <div>
          <router-view/>
            </div>
        </div>

        
  
  </div>

  <div class="sideber-bottom">
 Copyright Foodtrucker 2022 all right reserved
</div>
</div>
  </div>

 

</template>
<script>
// import $ from "jquery";

export default {

    name:"sidebar-Component",
}
</script>


<style lang="scss">
// .border-right{
//   border-right:0 !important;
// }
// .sidebar-compnet{
//   width:20rem
// }


// .sidebar-tab li a{
  
//   border: 1px solid #2275b6;
//   display: block;
//   padding: 5.5px 21.2px;
//   background:#2683cb;
//   color:#fff
// }
// .va-sidebar {
//   .va-collapse__body {
//     margin-top: 0 !important;
//   }

//   &__menu {
//     padding: 0rem 0;
//     &__inner {
//       padding-bottom: 8rem;
//     }
//   }

//   &-item {
//     &-content {
//       padding: 0.75rem 1rem;
//     }

//     &__icon {
//       width: 1.5rem;
//       height: 1.5rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// }
</style>

<style lang="css" scoped>

.sidebar-component{
    height: 93% !important;
    overflow-y: scroll;
    overflow-x: hidden;
}

.sidebar-component::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
  width: 0px;
}

.sideber-bottom{
  position: static;
  text-align: center;
}

.sidebar-logo-component img{
    width: 85px !important;
}
</style>