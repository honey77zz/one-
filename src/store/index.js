import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        // Oneitems: []
       
    },
    actions: {
        getOne(  ){
            console.log( this );
            
            // return new Promise( (res,rej)=>{
               
            // } );
        }
    },
    mutations: {
        
    }
})