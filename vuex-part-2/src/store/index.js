import Vue from 'vue'
import Vuex from 'vuex'
import books from '../data'
const fs = require('fs')

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    ppn: 0.1
  },
  mutations: {
    setItems(state, data = books) {
      state.items = data
    },
    pushToCart(state, data) {
      const filtered = state.cart.filter(val => val.ID == data.ID)
      if (filtered.length) {
        const index = state.cart.indexOf(filtered[0])
        state.cart[index].Quantity++
        // Vue.set(state.cart[index], 'Quantity', state.cart[index].Quantity + 1)
      } else {
        Vue.set(data, 'Quantity', 1)
        state.cart.push(data)
      }
    },
    popFromCart(state, data) {
      state.cart.splice(data, 1)
    },
    addQuantity(state, data) {
      Vue.set(state.cart[data], 'Quantity', state.cart[data].Quantity + 1)
    },
    reduceQuantity(state, data) {
      Vue.set(state.cart[data], 'Quantity', state.cart[data].Quantity - 1)
    },
    fakeCheckout(state) {
      state.cart = []
    }
  },
  actions: {
    searchData({ commit }, query) {
      const filteredItems = books.filter(val => val.Title.toLowerCase().includes(query.toLowerCase()) || val.Description.toLowerCase().includes(query.toLowerCase()))
      commit('setItems', filteredItems)
    }
  },
  getters: {
    cartSubTotal: state => {
      if (state.cart.length >= 1) {
        const data = state.cart.map(item => item.Price * item.Quantity)
        const total = data.reduce((x,y) => x + y)
        return total
      } else {
        return 0
      }
    },
    cartTotal: state => {
      if (state.cart.length >= 1) {
        const data = state.cart.map(item => item.Price * item.Quantity)
        const total = data.reduce((x,y) => x + y)
        return total - (total * state.ppn)
      } else {
        return 0
      }
    },
    cartPPN: state => {
      if (state.cart.length >= 1) {
        const data = state.cart.map(item => item.Price * item.Quantity)
        const total = data.reduce((x,y) => x + y)
        return total * state.ppn
      } else {
        return 0
      }
    }
  }
})
