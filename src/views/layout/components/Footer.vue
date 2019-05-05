<template>
  <van-tabbar v-if="tabbarShow" id="Footer" v-model="$store.state.tabSelect" active-color="#1989fa" :safe-area-inset-bottom="true" @change="selectTabbar">
    <van-tabbar-item icon="home-o" to="/">
      首页
    </van-tabbar-item>
    <!-- <van-tabbar-item icon="search">内容</van-tabbar-item> -->
    <!-- <van-tabbar-item icon="balance-list-o">分组</van-tabbar-item> -->
    <van-tabbar-item icon="manager-o" to="mine">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
// import { mapState } from 'vuex'
export default {
    name: 'Footer',
    props: {
        // 是否显示头部
        tabbarShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tabSelect: 0
        }
    },
    computed: {
        isTabSelect() {
            return this.$store.state.tabSelect
        }
    },
    watch: {
        isTabSelect(newCount) {
          this.tabSelect = newCount
        }
    },
    methods: {
        // 标签切换
        selectTabbar() {
            // console.log('底部索引值：' + this.tabSelect)
            this.$store.commit('modifyTabSelect', this.tabSelect)
        }
    }
}
</script>
