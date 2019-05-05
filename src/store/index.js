'strict:true'

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    routerMate: {
        tabbarShow: false, // 底部菜单的显示隐藏 true : 显示 ，false 隐藏
        headerShow: true, // 头部的显示隐藏 true : 显示 ，false 隐藏
        leftArrow: true // 显示返回箭头
    },
    tabSelect: 0 // 底部选中
}

// 注册上面引用的js
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store
