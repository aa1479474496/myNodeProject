<template>
    <scroll class="wrapper" :data="data" :pulldown="pulldown" @pulldown="loadData" :listenScroll='true' :pullup="true">
        <ul class="content">
            <li v-for="item in data">{{item}}</li>
        </ul>
        <div class="loading-wrapper"></div>
    </scroll>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    components: {
        scroll: require('./scroll.vue')
    },
    data() {
        return {
            data: [],
            pulldown: true
        }
    },
    created() {
        this.loadData()
    },
    methods: {
        loadData() {
                this.data = this.data.concat(this.pushData())
        },
        pushData() {
            let arr = []
            for(var i = 0; i < 60; i++) {
                arr.push(Math.round(Math.random()*10000))
            }
            return arr
        }
    }
}
</script>
<style scoped>
.wrapper {
    height: 100%;
}
.content li {
    height: 40px;
    line-height: 40px;
    background: skyblue;
    font-size: 20px;
    margin-bottom: 20px;
}
</style>