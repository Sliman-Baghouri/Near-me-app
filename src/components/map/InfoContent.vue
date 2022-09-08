
<template>
    <div class="google-popup">
        <v-card>
           
            <div class="card-title">
                <div class="card-headers d-flex justify-content-between">
                    <div class="resto-detail">
                        <a v-bind:href="content.url" target="_blank"><div class="address-head">{{content.address}}</div>
                        <!-- <div class="reatolocation ">{{content.street}},{{content.city}},{{content.state}}</div> -->
                        </a> 
                              
                        <div v-if="content.infotype=='festivals'">
                            <div class="view-event-details-button">
                            <a v-bind:href="content.url" target="_blank">View Event Details</a>
                            </div>

                        </div>           
                        
                        <div v-if="content.infotype=='vendors'">
                            <div class="view-event-details-button">
                              
                            <a  v-bind:href="content.url" target="_blank">View Business</a>
                            </div>

                        </div> 
                    </div>
                    <div class="info-close-btn" v-if="content.infotype=='foodtruck'">
                             <span class="share-icon" @click="findDistance"><img :src="require('../../assets/icons/Path.png')" ></span>
                     </div>
                    
                    
                    <!-- <h3 class="headline mb-0">{{content}}</h3>
                    <div>{{content}}</div> -->
                </div>
            </div>
                <div class="other-details">
                <div class="resto-schedule" v-if="content.infotype !=='vendors'">
                        <span class="info-Schedule">Schedule for </span><span class="info-open-day">Today</span>
                        
                             <span class="info-resto-time"><i class="fa fa-clock"></i></span><span class="info-restotime-text">{{content.time}}</span>
                    
                </div>
                <div class="resto-name-details d-flex justify-content-between align-items-center">
                    <div class="resto-imag">
                        <img  :src="content.icon">
                    </div>
                        <div class="resto-name">
                            <a href="#">{{content.name}}</a>
                            <div class="info-foodtype" >
                             
                             <span class="foodtype-name"  v-for="(food, index) in  content.foodtype" :key="index">
                                   <a :href="cusineURL1+ food.name.replace(/&amp;/g, 'and').replace(/[\s&]+/g, '-') + cusineURL2" target="_blank">
                                    <img  class="info-category-img" :src="food.image"> {{food.name}}</a> 
                                </span>

                            </div>
                            <div v-if="content.info"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="info-resto-text">{{content.info}}</span></div>
                        </div>
                        
                        
                </div>
                      
                </div>
            
        </v-card>
    </div>
</template>

<script>
    export default {
        props:['content'],
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
                cusineURL1: "https://foodtrucker.com.au/cuisines/",
                cusineURL2:"-near-me/"
            }
        },

        created(){
            console.log(this.content)
        },
        methods:{
            closeInfo()
            {
               
                 this.emitter.emit('closeInfo', false)
            },
            findDistance()
            {
                this.emitter.emit('findDistance', true)
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
.resto-name-details{
    /* border: 1px solid red; */
    padding: 5px 0;
}
.resto-imag {
     /* border: 1px solid red; */
     padding: 5px;
}

.resto-detail a {
    color: blue;

    /* font-size:14px; */
    font-weight: 400;
    /* text-decoration: none;    */
}
.address-head{
    font-weight: 550;
    margin-bottom: 3px;
}
/* .resto-detail{
   
    width: 100%;
    padding: 5px 0;
    
}

.resto-name a:hover{
    text-decoration: underline;
} */

</style>