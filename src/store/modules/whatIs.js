import WhatAPI from '../../API/what/what.js';
import $ from "jquery";

export const whatIs = {

    state:{
        restaurant:[],  
    },
    actions:{
        
        AllRestaurant({commit},data){
        //    alert(1);
            WhatAPI.getAllRestaurant(data)
            .then(function(response){
               commit('SET_RESTAURANT',response.data);
                   setTimeout(function(){ 
                        $('.resto-name-link')[0].click(); 
                  }, 1000);
               
            })
            .catch(function(){
                console.log(3);
            });
        },

        AllFoodtrucks({commit}, data){
            WhatAPI.getAllFoodtrucks(data)
            .then(function(response){
               commit('SET_RESTAURANT',response.data);
                               console.log('done rendering foodtrucks!')
                 setTimeout(function(){ 
                        $('.resto-name-link')[0].click(); 
                  }, 1000);

            })
            .catch(function(){
                console.log(3);
            });

        }
    },
    mutations:{
        SET_RESTAURANT(state,data){
            // console.log(data);   
            state.restaurant = data;
        },
    },
    getters:{
        get_all_restaurant(state)
        {
           
            return state.restaurant;
        },
    }
}