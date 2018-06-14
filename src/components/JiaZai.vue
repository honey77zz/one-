<template>
    <div class="jiaZai">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    </div>
</template>

<script>
    export default{
        name: 'JiaZai',
        props: ['isShow']
    };

</script>

<style scoped>
    .jiaZai{
        /* position: absolute; */
        width: 40px;
        height: 40px;
        padding: 20px 0;
        margin: 0 auto;
    }
    .fa{
        color: rgb(158, 158, 158);
        font-size: 40px;
    }
</style>
