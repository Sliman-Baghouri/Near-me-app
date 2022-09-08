import vendorAPI from '../../API/vendor.js';

export const vendor = {

    state:{
        vendors:[],  
    },
    actions:{
        
        AllVendors({commit},data)
        {
         
            vendorAPI.getAllVendors(data)
            .then(function(response){
               commit('SET_VENDORS',response.data);
            })
            .catch(function(){
                console.log(3);
            });
        }
    },
    mutations:{
        SET_VENDORS(state,data){
            // console.log(data);   
            state.vendors = data;
        },
    },
    getters:{
        get_all_vedors(state)
        {
            return state.vendors;
        },
    }
}