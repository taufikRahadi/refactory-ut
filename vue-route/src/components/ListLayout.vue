<template>
    <div>
        <div class="animate__animated animate__fadeIn py-5 grid grid-cols-1 gap-4">
            <slot name="card" :dataWithPagination="dataWithPagination">
                <card v-for="data in dataWithPagination" :key="data.id" :data="data">
                    <router-link slot="description" :to="{ name: `Detail${model}`, params: { id: data.id } }">Detail</router-link>
                </card>
            </slot>
        </div>

        <pagination :totalPages="totalPages" />
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
