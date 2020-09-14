import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data'
const fs = require('fs')

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    ppn: 0.1
  },
  mutations: {
    setItems(state) {
      state.items = data
    },
    pushToCart(state, data) {
      const filtered = state.cart.filter(val => val.ID == data.ID)
      if (filtered.length == 1) {
        const index = state.cart.indexOf(filtered[0])
        state.cart[index].Quantity += 1
      } else {
        data['Quantity'] = 1
        state.cart.push(data)
      }
    },
    popFromCart(state, data) {
      state.cart.splice(data, 1)
    },
    addQuantity(state, data) {
      console.log(state.cart[data])
      state.cart[data].Quantity += 1
    },
    reduceQuantity(state, data) {
      state.cart[data].Quantity -= 1
    }
  },
  actions: {
    
  },
  getters: {
    cartSubTotal: state => {
      if (state.cart.length >= 1) {
        return state.cart.reduce((x, y) => (x.Quantity * x.Price) + (y.Quantity * y.Price))
      } else {
        return 0
      }
    },
    cartTotal: state => {
      if (state.cart.length >= 1) {
        const total = state.cart.reduce((x, y) => (x.Quantity * x.Price) + (y.Quantity * y.Price))
        return total - (total * state.ppn)
      } else {
        return 0
      }
    },
    cartPPN: state => {
      if (state.cart.length >= 1) {
        const total = state.cart.reduce((x, y) => (x.Quantity * x.Price) + (y.Quantity * y.Price))
        return total * state.ppn
      } else {
        return 0
      }
    }
  }
})
