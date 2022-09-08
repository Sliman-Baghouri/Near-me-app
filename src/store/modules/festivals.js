import FestivalsAPI from '../../API/festivals.js';

export const festivals = {

    state:{
        allfestivals:[],  
    },
    actions:{
        
        Festivals({commit},data)
        {
     
                

                FestivalsAPI.getAllFestivals(data)
            .then(function(response){
              
               commit('SET_FESTIVALS',response.data);
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