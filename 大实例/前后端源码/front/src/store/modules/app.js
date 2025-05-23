import Cookies from 'js-cookie'

const state = {
  sideBar: {
    opened: Cookies.get('sideBarStatus') ? !!+Cookies.get('sideBarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'small'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sideBar.opened = !state.sideBar.opened
    state.sideBar.withoutAnimation = false
    if (state.sideBar.opened) {
      Cookies.set('sideBarStatus', 1)
    } else {
      Cookies.set('sideBarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sideBarStatus', 0)
    state.sideBar.opened = false
    state.sideBar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
