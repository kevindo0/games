const state = {
  screenHeight: document.documentElement.clientHeight
}

const mutations = {
  setHeight(state) {
    state.screenHeight = document.documentElement.clientHeight
  }
}


export default {
  namespaced: true,
  state,
  mutations
}
