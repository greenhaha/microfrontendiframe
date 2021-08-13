import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [
      {
        path: 'reactdemo',
        name: 'demoreact',
        address: 'http://localhost:3000'
      },
      {
        path: 'vuedemo',
        name: 'demovue',
        address: 'http://localhost:8081'
      }
    ],
    currentMenu: null,
    currentMenuKey: null
  },
  mutations: {
    SET_CURRENTMENU (state, params) {
      console.log(params)
      state.currentMenu = params
    },
    SET_CURRENTMENU_KEY (state, params) {
      state.currentMenuKey = params
    }
  },
  actions: {
    setCurrentMenu ({ commit }, params) {
      commit('SET_CURRENTMENU', params)
    },
    setCurrentMenuKey ({ state, commit }, params) {
      const currentMenu = state.menuList.filter((item) => `/${item.path}` === params)
      commit('SET_CURRENTMENU', currentMenu[0])
      commit('SET_CURRENTMENU_KEY', params)
    }
  },
  modules: {
  }
})
