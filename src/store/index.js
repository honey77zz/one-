import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
      // isShow: true,
      // isLoad: true,
      day:'',
      itemDate:'',
      home:'',//封面
      homeItems:[],//首页
      oneItems: [],  //图文
      // id:'',
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
           // console.log('555',data)
            let date = new Date(data.data.data.weather.date)
            //console.log('bbb',data.data.data.weather.date)
            let day = new Date(date)

            state.day=day.getDate();
            //console.log('ccc', state.day)
              let str = [...data.data.data.content_list];
            console.log('222',data.data.data.content_list)
            // state.id=data.data.data.content_list.content_id;
            state.home = data.data.data.content_list[0];
            let itemDate = state.home.post_date
            let formatDate = new Date(itemDate);
            state.itemDate= formatDate.getMonth()+".  "+formatDate.getFullYear();
            //console.log('ddd', state.itemDate)
            state.homeItems = state.homeItems.concat(str.slice( 1,3 ));
           // console.log('666', state.homeItems)
              //图文
              state.oneItems = state.oneItems.concat(str.slice( 0,7 ));
            //console.log('333', state.oneItems)
              //随机去掉一条数据
              let num  = parseInt(Math.random() * str.length);
              let airDel = str.splice(str.length-num,1)[0];
              // 拼成新的数组  [去掉的,...剩下的]
              state.storyItems = [airDel,...str];
              state.geItems = [airDel,...str];
              state.movieItems = [airDel,...str];
              res( state.oneItems );
            //console.log('444', state.oneItems)
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
