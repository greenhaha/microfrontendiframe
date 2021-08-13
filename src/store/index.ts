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
    currentMenu: null
  },
  mutations: {
    SET_CURRENTMENU (state, params) {
      console.log(params)
      state.currentMenu = params
    }
  },
  actions: {
    setCurrentMenu ({ commit }, params) {
      commit('SET_CURRENTMENU', params)
    }
  },
  modules: {
  }
})
