import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
      // isShow: true,
      // isLoad: true,
      oneItems: [],  //图文
      storyItems: [], //阅读
      geItems:[], // 音乐
      movieItems:[], //影视
    },
    actions: {
      //  得到数据  列表
      getOne( {commit,state} ){
        return new Promise( (res,rej)=>{
          let url = 'http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82';
          axios.get( url ).then(function( data ){
              let str = [...data.data.data.content_list];
              //图文
              state.oneItems = state.oneItems.concat(str.slice( 0,7 ));
              //随机去掉一条数据
              let num  = parseInt(Math.random() * str.length);
              let airDel = str.splice(str.length-num,1)[0];
              // 拼成新的数组  [去掉的,...剩下的]
              state.storyItems = [airDel,...str];
              state.geItems = [airDel,...str];
              state.movieItems = [airDel,...str];
              res( state.oneItems );
              // commit( 'changeLoad');
              // commit( 'changeShow');
          } ).catch((err) => {
              console.log( err );
          });
        });
      }
    },
    mutations: {
      changeShow( state ){
        state.isShow = !state.isShow;
      },
      changeLoad( state ){
        state.isLoad = !state.isLoad;
      }
    }
})
