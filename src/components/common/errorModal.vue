<template>
    <div class="entrust-mask">
        <div class="mask-bac" ontouchmove="return false;" @click="$emit('errorHide')"></div>
        <div class="entrust-error-content">{{errorText}}</div>
    </div>
</template>

<script>
export default {
    props: {
        errorText: ''
    }
}
</script>
<style scoped>
.entrust-mask {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /*display: none;*/
}

.mask-bac {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
}

.entrust-error-content {
    position: absolute;
    left: 67px;
    right: 67px;
    top: 32%;
    height: 55px;
    line-height: 57px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 2px;
    background: #000;
}
</style>