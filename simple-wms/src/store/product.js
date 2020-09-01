import http from '../helpers/http'
export default {
    namespaced: true,
    state: {
        products: [],
    },
    mutations: {
        setProducts (state, data) {
            state.products = data
        }
    },
    actions: {
        async fetchAll({ commit }) {
            try {
                const { data } = await http.get('product?limit=10&page=1', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
                commit('setProducts', data.data)
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },

        async createData({ dispatch }, payload) {
            console.log
            try {
                const { data } = await http.post('product', payload )
                dispatch('fetchAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },

        async updateData({ dispatch }, payload) {
            console.log(payload)
            try {
                const { data } = await http.put('product/' + payload.id, payload.data)
                dispatch('fetchAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },

        async destroyData({ dispatch }, payload) {
            try {
                const { data } = await http.delete('product/' + payload.id)
                dispatch('fetchAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        }
    }
}