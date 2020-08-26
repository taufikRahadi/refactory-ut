<template>
    <div>
        <div class="py-5 grid grid-cols-3 gap-4">
            <card v-for="album in albumsWithPagination" :data="album" :key="album.id" />
        </div>
        <pagination :totalPages="totalPages"></pagination>
    </div>    
</template>

<script>
import fetch from '@/plugins/fetch'
export default {
    data: () => ({
        albums: [],
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
        albumsWithPagination() {
            const data = this.paginate(this.albums)
            return data
        }
    },

    async created() {
        this.$Progress.start()
        try {
            this.albums = await fetch('albums')
            this.totalPages = this.albums.length / 10
            this.$Progress.finish()
        } catch(err) {
            this.$Progress.fail()
        }
        console.log(this.totalPages)
    }
}
</script>
