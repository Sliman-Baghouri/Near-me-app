import WhatAPI from '../../API/what/what.js';

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
            })
            .catch(function(){
                console.log(3);
            });
        },

        AllFoodtrucks({commit}, data){
            WhatAPI.getAllFoodtrucks(data)
            .then(function(response){
               commit('SET_RESTAURANT',response.data);
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