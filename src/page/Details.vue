<template>
    <div class="details">
        <img :src="imgSrc" class="details-topimg">
        <p class="details-author">
            <span>{{volume}}</span>
            {{title}}  | 远方
        </p>
        <p class="details-day">{{day}}</p>
        <p class="details-month"> {{itemDate}}</p>
        <div class="details-line"></div>
        <p class="details-content">{{forward}}</p>
        <div class="details-donload">
            <a href=""><img src="http://image.wufazhuce.com/app_download.png" alt=""></a>
            <p class="donwload-p">下载[一个]app</p>
        </div>
        <div class="details-footr">
            <span @click="golist">上一篇</span>
            <span><i class="fa fa-share" aria-hidden="true"></i> </span>
            <span @click="golist">下一篇</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Details",

        mounted() {
          console.log(this.$route.query.img_url);
          let img=this.$route.query.img_url
          // this.$store.dispatch('getOne');
          let that = this
           let url ='http://v3.wufazhuce.com:8000/api/channel/one/0/%E5%8C%97%E4%BA%AC%E5%B8%82'
            this.$http.get(url).then(function (data) {
                 console.log('2222',data)

              let date = new Date(data.data.data.date)
              let volume = data.data.data.content_list[0].volume
              let itemDate = data.data.data.content_list[0].post_date
              let forward = data.data.data.content_list[0].forward
              let title = data.data.data.content_list[0].title
              let author = data.data.data.content_list[1].author.user_name
              let itemforward = data.data.data.content_list[1].forward
              let formatDate = new Date(itemDate);
              that.day=date.getDate();
              that.volume=volume;
              that.forward=forward;
              that.imgSrc=img;
              that.itemDate= formatDate.getMonth()+".  "+formatDate.getFullYear();
              that.title=title;
              that.author=author;
              that.itemforward=itemforward;

            })
        },
        data(){
            return{
                imgSrc:'imgSrc',
                forward:'forward',
                title:'title',
                day:'day',
                volume:'volume',
                itemDate:'itemDate',
            }
        },
        methods:{
            golist(){
                this.$router.push({path:'/one'})
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
.details{
    margin-top: 54px;
}
.details .details-topimg{

    height: auto;
    width: 100%;
    display: block;
}
.details-author{
    text-align: right;
    padding: 0 20px;
    line-height: 32px;
}
.details-author span{
    text-align: right;
    float: left;
}
.details-day{
     text-align: center;
    font-size: 48px;
    line-height: 48px;
    margin:20px 0 0 0;


}
.details-month{
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
}
    .details-line{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 30%;
        height: 1px;
        background-color: gray;
        margin-left: auto;
        margin-right: auto;
    }
    .details-content{
        padding: 0 20px;
        line-height: 26px;
        margin-top: 14px;
        font-size: 16px;
        margin: 0 0 20px 0;


    }
    .details-donload{
        padding-top: 30px;
        width: 100%;
        height: 190px;
        text-align: center;
        text-align: center;
    }
    .details-donload  a{
        display: block;
        width: 60px;
        margin: 0 auto;
    }
    .details-donload  a img{
        display: block;
      width: 100%;
        height: auto;
        /*width: 100%;*/
    }
    .donwload-p{
        font-size: 12px;
        color: #808080;
        line-height: 18px;
    }
    .details-footr{
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: space-around;
        /*height: 121px;*/
        background: #fff;
        /* z-index: 1000; */
        bottom: 0;
        border-top:1px solid gray ;
    }
    .details-footr span{
        padding: 10px;
    }

</style>
