import WhatAPI from '../../API/what/what.js';
import $ from "jquery";

export const whatIs = {

    state:{
        restaurant:[],  
    },
    actions:{
        
        AllRestaurant({commit},data){
           console.log(data, 'baby');
           let selectedCuisines = data.cuisine;
            WhatAPI.getAllRestaurant(data)

            .then(function(response){
                console.log(response.data)
                // If the user chooses to filter by cuisine:
                let dataFiltered;
                if(selectedCuisines && selectedCuisines.length){
                     dataFiltered = [];
                    response.data.forEach((foodtruck)=>{
                        if(foodtruck.categories){
                            let foodCat = [];

                            foodtruck.categories.forEach((category) => {
                                foodCat.push(category.name);
                            })
                            let checker = (arr, target) => target.every(v => arr.includes(v));

                            if(checker(foodCat, selectedCuisines)){
                                  dataFiltered.push(foodtruck)
                            }
                        }
                    })
                // // The below code is for "or" conditioning when user selects filters. Above is for "and".
                // // let dataFiltered;
                // // if(selectedCuisines && selectedCuisines.length){
                // //      dataFiltered = [];
                // //     response.data.forEach((foodtruck)=>{
                // //         if(foodtruck.categories){
                // //             foodtruck.categories.forEach((category) => {
                // //               if(selectedCuisines.includes(category.name)){
                // //                   dataFiltered.push(foodtruck)
                // //               }      
                // //             })
                // //         }
                // //     })
                // // }                    
                }else{
                    // otherwise, just render all data.
                    dataFiltered = response.data;
                    console.log('arrived here', dataFiltered)
                }

               commit('SET_RESTAURANT', dataFiltered);
                   setTimeout(function(){ 
                    if($('.resto-name-link')[0]){


                        $('.resto-name-link')[0].click(); 
                         }
                  }, 1000);
               
            })
            .catch(function(){
                console.log(3);
            });
        },

        AllFoodtrucks({commit}, data){

            console.log('damn danil', data)
            WhatAPI.getAllFoodtrucks(data)
            .then(function(response){
               commit('SET_RESTAURANT',response.data);
                               console.log('done rendering foodtrucks!')
                 setTimeout(function(){ 
                        if($('.resto-name-link')[0]){
                            $('.resto-name-link')[0].click(); 
                        }
                  }, 1000);

            })
            .catch(function(){
                console.log(3);
            });
        }
    },
    mutations:{
        SET_RESTAURANT(state,data){
            // console.log('stuff just arrived', data, cuisine);   
            state.restaurant = data;
        },
    },
    getters:{
        get_all_restaurant(state){
            return state.restaurant;
        },
    }
}