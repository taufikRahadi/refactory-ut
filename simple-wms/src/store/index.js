import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowModal: false,
    isEditing: false,
  },
  mutations: {
    setShowModal (state, data) {
      state.isShowModal = data
    },
    setIsEditing (state, data) {
      state.isEditing = data
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
