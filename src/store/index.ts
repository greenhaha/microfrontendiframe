import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [
      {
        path: '/reactdemo',
        name: 'demoreact',
        address: 'http://localhost:3000'
      },
      {
        path: '/vuedemo',
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
    },
    ADD_MENULIST (state, params) {
      const newRoute = {
        path: params.from,
        name: params.name,
        address: params.origin
      }
      state.menuList.push(newRoute)
    }
  },
  actions: {
    setCurrentMenu ({ commit }, params) {
      commit('SET_CURRENTMENU', params)
    },
    setCurrentMenuKey ({ state, commit }, params) {
      const currentMenu = state.menuList.filter((item) => `${item.path}` === params)
      if (currentMenu.length !== 0) {
        commit('SET_CURRENTMENU', currentMenu[0].address)
      }

      commit('SET_CURRENTMENU_KEY', params)
    },
    addMenuList ({ commit }, params) {
      console.log('store:', params)
      commit('ADD_MENULIST', params)
      commit('SET_CURRENTMENU', params.origin + params.from)
      commit('SET_CURRENTMENU_KEY', params.name)
    }
  },
  modules: {
  }
})
