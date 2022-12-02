
<template>
    <div class="google-popup">
        <v-card>
            <svg @click="findDistance" id="info-close-btn" style="cursor:pointer;position: absolute;right:10px" height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59-24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59-24.58 24.59a2 2 0 0 0 0 2.82z"/></svg>
            <div class="card-title">
                <div class="card-headers justify-content-between">
                 
                    <div class="resto-detail" >
                        <Splide v-if="content.infotype=='foodtruck'" :options="{lazyLoad:'nearby', rewind: true }"   aria-label="Food Truck Gallery">
                             <SplideSlide v-for="slide in this.allImgs" :key="slide.src">
                                 <img :data-splide-lazy="slide" :src="slide" alt="Food Truck Picture">
                            </SplideSlide>
                        </Splide>
     <div class="resto-name-details d-flex justify-content-between align-items-center">
                    <div v-if="content.infotype=='foodtruck'" class="resto-imag">
                        <img  :src="content.icon">
                    </div>
                    <div v-if="content.infotype=='festivals'" class="resto-imag fest-imag">
                        <img  :src="content.icon">
                    </div>

                        <div class="resto-name">
                             <div  v-if="isCustomizePage">
                                <div class="view-event-details-button">
                                  
                                <a  v-bind:href="content.url" target="_blank">Hire this food truck <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path d="M10 1.5L17 9.5L10 17.5M1 9.5H17H1Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                </div>

                            </div>
                        </div>

                </div>    
                <div class="foodtruck-infos">
                    <div class="business-name">
                        <a v-if="content.infotype=='foodtruck'" target="_blank" :href="content.url" class="big-name">{{content.name}}</a>
                        <a v-if="content.infotype=='festivals'" target="_blank" :href="content.url" class="big-name-fest">{{content.name}}</a>


                        <div v-if="content.info"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="info-resto-text">{{content.info}}</span></div>
                    </div>

                        <a v-bind:href="content.url" target="_blank"><div class="address-head">{{content.address}}</div>
                        <!-- <div class="reatolocation ">{{content.street}},{{content.city}},{{content.state}}</div> -->
                        </a> 
                                                    
                        
                         <div class="info-foodtype" >
                             
                             <span class="foodtype-name"  v-for="(food, index) in  content.foodtype" :key="index">
                                   <a :href="cusineURL1+ food.name.replace(/&amp;/g, 'and').replace(/[\s&]+/g, '-') + cusineURL2" target="_blank">
                                    <img  class="info-category-img" :src="food.image"> {{food.name}}</a> 
                                </span>

                            </div>
                                                     <div v-if="content.infotype=='festivals'">
                            <div class="view-event-details-button fest-btn">
                            <a v-bind:href="content.url" target="_blank">View Event Details</a>
                            </div>

                        </div>           

                </div>


                    </div>
                    <div class="info-close-btn" v-if="content.infotype=='foodtruck'">
<!--                              <span class="share-icon" @click="findDistance"><img :src="require('../../assets/icons/Path.png')" ></span>
 -->                     </div>
                    
                    
                    <!-- <h3 class="headline mb-0">{{content}}</h3>
                    <div>{{content}}</div> -->
                </div>
            </div>
                <div class="other-details">
                <div class="resto-schedule" v-if="!isCustomizePage">
                        <span class="info-Schedule">Schedule for </span><span class="info-open-day">Today</span>
                        
                             <span class="info-resto-time"><i class="fa fa-clock"></i></span><span class="info-restotime-text">{{content.time}}</span>
                    
                </div>
           
                      
                </div>
            
        </v-card>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';



    export default {
        props:['content'],
        components: {
            Splide,
            SplideSlide,
      },
 
      setup() {
      

           
        const options = {
          rewind : true,
          lazyLoad:'nearby',          
          perPage: 2,
        };
    return {
      options,
     }
  },

        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
                cusineURL1: "https://foodtrucker.com.au/cuisines/",
                cusineURL2:"-near-me/",
                allImgs:[]
            }
        },
        computed: {
        },

 watch: {
  $route: {
     immediate: true,
     handler() {
         if(this.$route.path == '/vendors') {
           this.isCustomizePage = true;
         } else {
            this.isCustomizePage = false;
         }
     }
  }
},

        async created(){  

 

        },
        mounted(){

        this.emitter.on('fetchSliderImages', async (markerURL)=>{

           let businessID = /[^/]*$/.exec(markerURL.info.slice(0, -1))[0];
           let srcs = await this.fetchGallery(businessID);
            this.allImgs = srcs.images
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',this.allImgs);


        })
        
        },
        methods:{
            closeInfo(){
                 this.emitter.emit('closeBtn')
            },
            findDistance(){

                this.emitter.emit('findDistance', true)
            },
            async fetchGallery(businessID){
               const rawResponse = await fetch('https://foodtrucker-api-production.up.railway.app/nearme-gallery/fetchGallery', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },                      
                body: JSON.stringify({business:businessID})
              });
              const images = await rawResponse.json();
              console.log(images,'ddddddddddddddddddddddddddddddddddd')
              return images;

            }
        },
        

    }
</script>
<style>
.google-popup .v-card{
/* padding: 5px !important; */
width: 315px;
font-weight: 200;
max-height: 200px;
/* border: 1px solid rgb(237, 228, 228); */
/* background: #555;
    border: #555;
    color: #fff; */
/* widows: 200px; */
}
.card-headers{
    /* border: 1px solid red; */
    padding: 10px 0;
}
.gm-style-iw-a .gm-ui-hover-effect{
    display: none !important;
}
.google-popup .v-card-title{
    /* border: 1px solid red; */
    /* font-size: 13px; */
    padding: 2px ;
    
}

.gm-style .gm-style-iw-c{
    /* padding: 0%; */
}
.mttop{
    margin-top: -10px;
}

.google-popup .v-card-subtitle{
    padding: 0px;
}
.other-details{
    background: white;
    color: #000;
}
.resto-schedule{
    background-color: #eee;
    padding: 7px 5px 5px 8px;

}

.info-close-btn{
    margin-left: 38px;
    margin-top: 7px;
}

#info-close-btn{
     z-index: 9999999 !important;
     margin-top: 5px;
}

.resto-name{
    text-align: right;
    margin-right: 11px;
}
.resto-name > a{
    color: black !important;
}
.resto-name-details{
    /* border: 1px solid red; */
    padding: 5px 0;
}
.resto-imag {
     /* border: 1px solid red; */
     padding: 5px;
}

.resto-detail a {
    color: #232323;
    width: 200px !important;
    display: block;

    /* font-size:14px; */
    font-weight: normal;
    /* text-decoration: none;    */
}
.address-head{
    font-weight: 550;
    margin-bottom: 3px;
}

.view-event-details-button a{
    box-shadow: 0px 4px 14px rgb(0 0 0 / 5%);
    display: inline-block;
    text-decoration: none;
    background: #F28F48 !important;
    color: #fff;
    line-height: 1.4;
    border-radius: 3px !important;
    padding: 0;
    padding: 5px !important;
    font-size: 12px;
    width: 62% !important;
    font-weight: 500;    
    border: none !important;
}

.view-event-details-button svg{
    width: 15px;
    height: 15px;
    transform: translateY(3px);
    margin-left: 5px;
}
.fest-btn a{
    text-align: center;
    margin-bottom: 3%;
}

.foodtype-name{
    border-radius: 0 !important;
}

.resto-imag img {
    border-radius: 100% !important;
    box-shadow: 0px 4px 14px rgb(0 0 0 / 10%);
    transform: translate(13px,-60%)
}

.fest-imag img{
    border-radius: 100% !important;
    box-shadow: 0px 4px 14px rgb(0 0 0 / 10%);
    transform: translate(102px,-20%);
}

 .resto-detail{
overflow-x: hidden;    
}

.resto-name a:hover{
    text-decoration: underline;
} 


/* slider  */

.splide__slide img {
    width: 100%;
    height: 100%;
}
.splide__list{
    height: auto;
}

.splide.is-initialized{
    width: 306px;
    height: 150px;
    display: flex;
    padding: 0;
    margin: 0;
}


.card-headers{
    width: 100%;
    display: block !important;
    padding: 0 !important;
}
.gm-style .gm-style-iw-d{
    overflow: auto !important;
}

.gm-style .gm-style-iw-c{
    padding: 0 !important;
}


.info-foodtype{
    display: flex;
    width: auto;
    flex-wrap: wrap;
}
.foodtype-name{
    height: 40px;
    width: 76px;
}

.foodtype-name a{
    font-size: 11px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.resto-detail a{
text-decoration: none;
}
.address-head {
    color: grey;
    font-weight: normal;
    width: 259px;
    line-height: 1.5;    
}

.foodtruck-infos{
    margin-left: 7%;
}

.foodtruck-infos .big-name{
    font-size: 15px;
    font-weight: bold;
    transform: translateY(-15px);
}

.foodtruck-infos .big-name-fest{
    font-size: 13px;
    font-weight: bold;
    transform: translateY(-15px);
}

</style>