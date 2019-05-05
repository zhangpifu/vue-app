'strict:true'

// 底部的显示隐藏
export const modifyRouterMate = ({ commit }, name) => commit('modifyRouterMate', name)

// 底部选中
export const modifyTabSelect = ({ commit, name }) => commit('modifyTabSelect', name)
