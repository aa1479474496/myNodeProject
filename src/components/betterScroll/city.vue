<template>
    <div>
        <div class="select" @click="showPicker(3)" ref="select3">{{ selectedText[3] }}</div>
        <city-picker @select="handleSelect(3,arguments)" :data="data[3]" :selected-index="selectedIndex[3]" ref="picker3" :title="title[3]" :cancelTxt="cancel" :confirmTxt="confirm">
        </city-picker>
    </div>
</template>

<script>
import cityPicker from './cityPicker.vue'
import { provinceList, cityList, areaList } from './areaData'
let data1 = [
    {
        text: '剧毒',
        value: 1
    }, {
        text: '蚂蚁',
        value: 2
    },
    {
        text: '幽鬼',
        value: 3
    },
    {
        text: '主宰',
        value: 4
    },
    {
        text: '卡尔',
        value: 5
    },
    {
        text: '宙斯',
        value: 6
    },
    {
        text: '巫医',
        value: 7
    }, {
        text: '巫妖',
        value: 8
    },
    {
        text: '神谕者',
        value: 9
    },
    {
        text: '撼地神牛',
        value: 10
    },
    {
        text: '蓝胖子',
        value: 11
    },
    {
        text: '水晶室女',
        value: 12
    },
    {
        text: '莉娜',
        value: 13
    },
    {
        text: '斯拉克',
        value: 14
    },
    {
        text: '斯拉达',
        value: 15
    }
]

let data2 = [
    {
        text: '输出',
        value: 'a'
    }, {
        text: '控制',
        value: 'b'
    },
    {
        text: '核心',
        value: 'c'
    },
    {
        text: '爆发',
        value: 'd'
    },
    {
        text: '辅助',
        value: 'e'
    },
    {
        text: '打野',
        value: 'f'
    },
    {
        text: '逃生',
        value: 'g'
    }, {
        text: '先手',
        value: 'h'
    }
]

let data3 = [
    {
        text: '梅肯',
        value: 's'
    }, {
        text: '秘法鞋',
        value: 'ss'
    },
    {
        text: '假腿',
        value: 'sss'
    },
    {
        text: '飞鞋',
        value: 'ssss'
    },
    {
        text: '辉耀',
        value: 'sssss'
    },
    {
        text: '金箍棒',
        value: 'ssssss'
    }
]
export default {
    mounted() {
        // this.$refs.picker0.setData([data1])
        // this.$refs.picker0.setSelectedIndex([1])
    },
    data() {
        return {
            cancel: '取消',
            confirm: '确定',
            data: [
                [data1],
                [data1, data2],
                [data1, data2, data3],
                [provinceList, cityList, areaList]
            ],
            selectedIndex: [
                [0],
                [1, 0],
                [0, 1, 2],
                [0, 0, 0]
            ],
            selectedText: [
                'pickerPage.oneColumn',
                'pickerPage.twoColumn',
                'pickerPage.threeColumn',
                'pickerPage.linkage'
                // this.$i18n.tc('pickerPage.oneColumn') + this.$i18n.t('pickerPage.pickerDemo'),
                // this.$i18n.t('pickerPage.twoColumn') + this.$i18n.t('pickerPage.pickerDemo'),
                // this.$i18n.t('pickerPage.threeColumn') + this.$i18n.t('pickerPage.pickerDemo'),
                // this.$i18n.t('pickerPage.linkage') + this.$i18n.t('pickerPage.pickerDemo')
            ],
            title: [
                'pickerPage.oneColumn',
                'pickerPage.twoColumn',
                'pickerPage.threeColumn',
                '省市区'
                // this.$i18n.t('pickerPage.oneColumn') + this.$i18n.t('pickerPage.picker'),
                // this.$i18n.t('pickerPage.twoColumn') + this.$i18n.t('pickerPage.picker'),
                // this.$i18n.t('pickerPage.threeColumn') + this.$i18n.t('pickerPage.picker'),
                // this.$i18n.t('pickerPage.linkage') + this.$i18n.t('pickerPage.picker')
            ]
        }
    },
    methods: {
        showPicker(index) {
            let picker = this.$refs['picker' + index]

            picker.show()
        },
        handleSelect(index, args) {
            this.selectedText.splice(index, 1, args[2].join('，'))
        }
    },
    components: {
        cityPicker
    }
}
</script>



<style scoped>
.select {
    margin: 0 10px 40px 10px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background: #fff;
}
</style>