export const state = () => ({
  navMenuOpen: false
})

export const mutations = {
  SET_NAV_MENU_OPEN(state, open) {
    state.navMenuOpen = open
  }
}

export const actions = {
  openNavMenu({ commit }) {
    commit('SET_NAV_MENU_OPEN', true)
  },
  closeNavMenu({ commit }) {
    commit('SET_NAV_MENU_OPEN', false)
  }
}

// export const getters = {
//   getNavMenuOpen() {
//     return state.navMenuOpen
//   }
// }
