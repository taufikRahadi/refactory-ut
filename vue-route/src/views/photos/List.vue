<template>
    <list-layout :data="photos">
        <card v-for="photo in photosWithPagination" :data="photo" :key="photo.id">
            <img :src="photo.thumbnailUrl" class="w-full h-32 object-cover" slot="image" :alt="photo.title + 'photos'">
            <router-link slot="description" :to="{ name: 'DetailPhoto', params: { id: photo.id } }">Detail</router-link>
        </card>
    </list-layout>
</template>

<script>
import photos from '@/data/photos'
export default {
    data: () =>({
        photos: photos,
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
        photosWithPagination() {
            const data = this.paginate(this.photos)
            return data
        }
    },
}
</script>
