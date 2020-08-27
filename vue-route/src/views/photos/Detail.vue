<template>
    <detail-layout :data="photo" model="Photo" :featuredData="featuredData"></detail-layout>
</template>

<script>
import photos from '@/data/photos'
import albums from '@/data/albums'

export default {
    computed: {
        photo() {
            return photos.find(photo => photo.id == this.$route.params.id)
        },

        featuredData() {
            const mapPhoto = photos.map(photo => photo['album'] = albums.find(album => album.id === photo.albumId))
            const first = mapPhoto[0]
            const latest = mapPhoto[mapPhoto.length - 1]
            return [first, latest]
        }
    }
}
</script>
