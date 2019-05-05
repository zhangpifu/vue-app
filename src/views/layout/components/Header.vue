<template>
  <van-nav-bar v-show="headerShow" id="Header" :title="title" :left-text="leftText" :right-text="rightText" :left-arrow="leftArrow" @click-left="onClickLeft" @click-right="onClickRight" />
</template>

<script>
export default {
    name: 'Header',
    props: {
        // 是否显示头部
        headerShow: {
            type: Boolean,
            default: true
        },
        // 标题
        title: {
            type: String,
            default: 'VueApp'
        },

        // 左边的文字
        leftText: {
            type: String,
            default: ''
        },

        // 右边的文字
        rightText: {
            type: String,
            default: ''
        },

        // 是否显示返回箭头
        leftArrow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {}
    },
    methods: {
        /** 左边的返回按钮点击事件 */
        onClickLeft() {
            this.$router.go(-1)
        },
        /** 右边按钮点击事件 */
        onClickRight() {}
    }
}
</script>
