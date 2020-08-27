<template>
    <div>
        <div class="grid grid-cols-3">
            <div class="col-span-2 px-5 py-5">
                <h3 class="font-bold text-2xl text-gray-700 text-left">
                    {{ $route.name }}
                </h3>
                <div class="animate__animated animate__fadeIn py-5 grid grid-cols-1 gap-4">
                    <slot name="card" :dataWithPagination="dataWithPagination">
                        <card v-for="data in dataWithPagination" :key="data.id" :data="data">
                            <router-link class="text-teal-400" slot="description" :to="{ name: `Detail${model}`, params: { id: data.id } }">Read More</router-link>
                        </card>
                    </slot>
                </div>
                <pagination :totalPages="totalPages" />
            </div>
            <div class="col-span-1">
                <side-bar :model="model" :data="featuredData">
                    <template v-slot:sidebar-item>
                        <slot name="widget" :featuredData="featuredData"></slot>
                    </template>
                </side-bar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'data',
        'model'
    ],

    data: () => ({
        totalPages: 0
    }),

    methods: {
        paginate(arr) {
            const limit = 10
            const page = parseInt(this.$route.params.page)
            const start = (page - 1) * limit
            const end = page * limit
            return arr.slice(start, end)
        }
    },

    computed: {
        dataWithPagination() {
            return this.paginate(this.data)
        },

        featuredData() {
            const latest = this.data[this.data.length - 1]
            const first = this.data[0]
            return [latest, first]
        }
    },

    mounted() {
        this.$Progress.start()
        const total = this.data.length / 10
        this.totalPages = total % 1 == 0 ? total : parseInt(total) + 1
        this.$Progress.finish()
    }
}
</script>
