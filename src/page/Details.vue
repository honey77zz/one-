<template>
    <div class="details">
        <img src="http://image.wufazhuce.com/FnYP0tkaMwoXPJ7UkTG3yVwRRGlk" class="details-topimg">
        <p class="details-author">
            <span>voL.2016</span>
            摄影 | 远方
        </p>
        <p class="details-day">10</p>
        <p class="details-month">Jun 2018</p>
        <div class="details-line"></div>
        <p class="details-content">成年人心平气和有时候吧成年人心平气和有时
            候吧成年人心平气和有时候吧成年人心平气和有时候吧 成年人心平气和有时
            候吧成年人心平气和有时候吧</p>
        <div class="details-donload">
            <a href=""><img src="http://image.wufazhuce.com/app_download.png" alt=""></a>
            <p class="donwload-p">下载[一个]app</p>
        </div>
        <div class="details-footr">
            <span>上一篇</span>
            <span>三生三世</span>
            <span>下一篇</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Details"
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