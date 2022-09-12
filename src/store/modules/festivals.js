import FestivalsAPI from '../../API/festivals.js';
import $ from "jquery";

export const festivals = {

    state:{
        allfestivals:[],  
    },
    actions:{
        
        Festivals({commit},data){
     
                

                FestivalsAPI.getAllFestivals(data)
            .then(function(response){

               commit('SET_FESTIVALS',response.data);
                   setTimeout(function(){ 
                        $('.festivals-link')[0].click(); 
                  }, 1000);

            })
            .catch(function(){
                console.log(3);
            });
        }
    },
    mutations:{
        SET_FESTIVALS(state,data){
            // console.log(data);   
            state.allfestivals = data;
        },
    },
    getters:{
        get_all_festivals(state)
        {
            return state.allfestivals;
        },
    }
}