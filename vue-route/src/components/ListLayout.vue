<template>
    <div>
        <div class="animate__animated animate__fadeIn py-5 grid grid-cols-1 gap-4">
            <slot>
                <card v-for="data in dataWithPagination" :key="data.id" :data="data" />
            </slot>
        </div>

        <pagination :totalPages="totalPages" />
    </div>
</template>

<script>
export default {
    props: [
        'data'
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
        const total = parseInt(this.data.length / 10)
        // console.log(total)
        this.totalPages = total % 1 == 0 ? total : total + 1
        this.$Progress.finish()
    }
}
</script>
