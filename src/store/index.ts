import { createStore } from 'vuex'

export default createStore({
  // m00: 定义菜单显示、折叠的状态、修改方法
  state: {
    // state
    collapse_menu:false //是否展开，是
  },
  mutations: {
    // 修改state 的唯一方法
    changeCollapseMmenu(state,data){
      console.log("mutation 触发了...")
      state.collapse_menu = data; 
    }
  },
  actions: {
    // 异步修改 state
    CHANGECollapse(context,data){
      console.log("Action 触发了...")
      context.commit("changeCollapseMmenu",data)
    }
  },
  modules: {
  }
})
