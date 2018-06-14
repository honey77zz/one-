<template>
    <div class="load">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    </div>
</template>

<script>
    export default{
        name: 'Loading',
        props: ['isLoad']
    };

</script>

<style scoped>
    .load{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        padding: 20px 0;
        margin: auto;
        z-index: 1009;
    }
    .fa{
        color: rgb(158, 158, 158);
        font-size: 40px;
    }
</style>
