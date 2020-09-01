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
            try {
                const { data } = await http.post('product', { data: payload })
                dispatch('findAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },

        async updateData({ dispatch }, payload) {
            try {
                const { data } = await http.put('product/' + payload.id, { data: payload })
                dispatch('findAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },

        async destroyData({ dispatch }, payload) {
            try {
                const { data } = await http.delete('product/' + payload.id)
                dispatch('findAll')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        }
    }
}