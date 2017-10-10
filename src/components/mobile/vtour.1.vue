<template>
    <div class="index-mask" style="display:block;">
        <div class="vtour-content" ontouchmove="return false;">
            <div class="vtour-header"><a href="javascript:history.back(-1);" class="vtour-back"><i class="vtour-back-icon"></i></a>闪铺360</div>
            <div class="swipe-box" style="width:100%;">
                <div class="swipe-content pos-rel">
                    <a href="#" class="overall-link"></a>
                    <img src="../../assets/temp/vtour1.jpg" class="vtour-swipe-img blur-img" alt="">
                </div>
                <div class="swipe-content" style="display:none;">
                     <a href="#" class="threeD-link"></a>
                    <img src="../../assets/temp/vtour2.jpg" class="vtour-swipe-img blur-img" alt="">
                </div>
                <div class="swipe-content" style="display:none;">
                    <div class="swiper-container plan-swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="vtour-swipe-img" src="../../assets/temp/vtour3.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="vtour-swipe-img" src="../../assets/temp/vtour4.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swipe-content" style="display:none;">
                    <div class="swiper-container floor-swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="vtour-swipe-img" src="../../assets/temp/vtour7.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="vtour-swipe-img" src="../../assets/temp/vtour8.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vtour-bar">
                <i class="overall-btn vtour-active"></i>
                <i class="threeD-btn"></i>
                <i class="plan-btn"></i>
                <i class="floor-btn"></i>
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

        }
    },
    mounted() {
        var planSwiper, floorSwiper, floorInitFlag = false, planInitFlag = false;
        var swipeBox = $('.vtour-bar').siblings('.swipe-box');
        $('.vtour-bar i').on('click', function () {
            var index = $(this).index();
            $(this).addClass('vtour-active').siblings('i').removeClass('vtour-active');
            swipeBox.find('.swipe-content').eq(index).show().siblings('.swipe-content').hide();
            if (index === 2 && !planInitFlag) {
                planInit();
            }
            if (index === 3 && !floorInitFlag) {
                floorInit();
            }
        });

        function planInit() {
            planSwiper = new Swiper('.plan-swiper-container', {});
            planInitFlag = true;
        }

        function floorInit() {
            floorSwiper = new Swiper('.floor-swiper-container', {});
            floorInitFlag = true;
        }

        this.getVtour()

    },
    methods: {
        getVtour () {
            let self = this
             self.api.getVtourData({ mallCode: '', shopCode:'M00055201001002' }).then(response => {
                //  debugger
                 let result = response.data
                 console.log(result);
             })
        }
    }
}
</script>