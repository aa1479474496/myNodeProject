<template>
    <div class="wrapper" ref="wrapper" style="overflow: hidden">
        <div>
            <ul class="content" ref='list'>
                <li v-for="(item,index) in arr" @click="test(index)">{{item}}</li>
            </ul>
            <div class="loading" v-if="isPullUpLoad">
                <img src="../../assets/img/loading.gif" width="20" height="20" alt="">
            </div>
        </div>
    
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            pullUpLoad: true,
            isPullUpLoad: false,
            pageNo: 1
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.list && (this.pullDownRefresh || this.pullUpLoad)) {
                this.$refs.list.style.minHeight = '668px'
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: 1,
                pullUpLoad: this.pullUpLoad,
                startY: 0,
                click: true,
                pullDownRefresh: false
            })

            if (this.pullUpLoad) {
                this._initPullUpLoad()
            }
        })
    },
    methods: {
        loadData() {
            console.log(this.pageNo);
            let self = this
            let arr = []
            for (var i = 0; i < 6; i++) {
                arr.push(Math.round(Math.random() * 10000))
            }
            setTimeout(() => {
                this.arr = this.arr.concat(arr)
                this.$nextTick(function() {
                    this.isPullUpLoad = false
                    this.scroll.finishPullUp()
                    this.scroll.refresh()
                })
            }, 1000);

        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                console.log('myup')
                if (this.pageNo > 3) {
                    console.log('没有更多');
                    return
                }
                this.isPullUpLoad = true
                this.pageNo ++
                this.loadData()
                // this.isPullUpLoad = true
                // this.$emit('pullingUp')
            })
        },
        test(index) {
            alert(index)
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

.loading {
    padding: 16px 0;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>