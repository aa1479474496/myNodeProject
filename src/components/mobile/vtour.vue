<template>
    <div class="index-mask" style="display:block;">
        <div class="vtour-content" ontouchmove="return false;">
            <div class="vtour-header"><a href="javascript:history.back(-1);" class="vtour-back"><i class="vtour-back-icon"></i></a>{{pageTitle}}</div>
            <div class="swipe-box">
                <template v-if="!!qjList.length">
                    <div class="swipe-content pos-rel" v-show="displayName=='overall'">
                        <a :href='qjList[0].vLink' class="overall-link"></a>
                        <img :src="imageUrl + qjList[0].vSrc" class="vtour-swipe-img blur-img" alt="">
                    </div>
                </template>
    
                <template v-if="!!threeDList.length">
                    <div class="swipe-content" v-show="displayName=='threeD'">
                        <a :href='threeDList[0].vLink' class="threeD-link"></a>
                        <img :src="imageUrl + threeDList[0].vSrc" class="vtour-swipe-img blur-img" alt="">
                    </div>
                </template>
     
                <template v-if="!!hpList.length">
                    <div class="swipe-content" v-show="displayName=='hp'">
                        <a :href='hpList[0].vLink' class="hp-link"></a>
                        <img :src="imageUrl + hpList[0].vSrc" class="vtour-swipe-img blur-img" alt="">
                    </div>
                </template>
                <template v-if="!!plainList.length">
                    <div class="swipe-content" v-if="displayName=='plan'">
                        <div class="swiper-container plan-swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in plainList" :key="index">
                                    <img class="vtour-swipe-img" :src="imageUrl + item.vSrc" alt="" :data-item="(index + 1) + '/' + plainList.length">
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
    
                <template v-if="!!floorList.length">
                    <div class="swipe-content" v-if="displayName=='floor'">
                        <div class="swiper-container floor-swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in floorList" :key="index">
                                    <img class="vtour-swipe-img" :src="imageUrl + item.vSrc" alt="" :data-item="(index + 1) + '/' + floorList.length">
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
    
            </div>
            <div class="vtour-bar">
                <template v-if="!!arrTotal.length">
                    <i v-for="(item,index) in arrTotal" :class="[item.name + '-btn', displayName==item.name?'vtour-active':'']" @click="secDisplay(item.name)" :key="index"></i>
                </template>
            </div>
        </div>
    
    </div>
</template>

<script>
import '../../assets/css/swiper.min.css'
import '../../assets/css/vtour.css'
import Swiper from 'swiper'
export default {
    data() {
        return {
            mallCode: '',
            shopCode: 'M00055201001002',
            pageTitle: '',
            arrTotal: [],
            qjList: [],
            threeDList: [],
            hpList: [],
            plainList: [],
            floorList: [],
            imageUrl: 'https://images11.putiandi.com',
            displayName: '',
            planSwiper: null,
            floorSwiper: null,
        }
    },
    mounted() {
        this.getVtour()
    },
    methods: {
        getVtour() {
            let self = this
            self.api.getVtourData({ mallCode: '', shopCode: 'M00055201001002' }).then(response => {

                if (response.errorCode === 1) {
                    let result = response.data
                    self.qjList = result.qjList || []
                    self.threeDList = result.threeDList || []
                    self.hpList = result.hpList || []
                    self.plainList = result.plainList || []
                    self.floorList = result.floorList || []

                    !!self.qjList.length && self.arrTotal.push({ name: 'overall' })
                    !!self.threeDList.length && self.arrTotal.push({ name: 'threeD' })
                    !!self.hpList.length && self.arrTotal.push({ name: 'hp' })
                    !!self.plainList.length && self.arrTotal.push({ name: 'plan' })
                    !!self.floorList.length && self.arrTotal.push({ name: 'floor' })
                    self.displayName = self.arrTotal[0].name
                }
            })
        },
        secDisplay(name) {
            this.displayName = name
            this.pageTitle = ''
            if (name == 'plan') {
                this.pageTitle = '1/' + this.plainList.length
                this.planInit()
            }
            if (name == 'floor') {
                his.pageTitle = '1/' + this.floorList.length
                this.floorInit()
            }
        },
        planInit() {
            let self = this
            this.$nextTick(function () {
                this.planSwiper = new Swiper('.plan-swiper-container', {
                    onSlideChangeStart: function (swiper, event) {
                        let title = $('.plan-swiper-container .swiper-slide').eq(swiper.activeIndex).find('.vtour-swipe-img').attr('data-item')
                        self.pageTitle = title
                    }
                });
            })
        },
        floorInit() {
            this.$nextTick(function () {
                this.floorSwiper = new Swiper('.floor-swiper-container', {
                    onSlideChangeStart: function (swiper, event) {
                        let title = $('.plan-swiper-container .swiper-slide').eq(swiper.activeIndex).find('.vtour-swipe-img').attr('data-item')
                        self.pageTitle = title
                    }
                });
            })
        }
    }
}
</script>