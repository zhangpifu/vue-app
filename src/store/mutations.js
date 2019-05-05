'strict:true'

// 改变tabbarShow的值
export const modifyRouterMate = (state, name) => {
      state.routerMate = name
}

// 改变底部选中的值
export const modifyTabSelect = (state, name) => {
    state.tabSelect = name
}
