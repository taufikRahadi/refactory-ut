<template>
    <detail-layout :data="photo"></detail-layout>
</template>

<script>
import photos from '@/data/photos'
export default {
    computed: {
        photo() {
            return photos.find(photo => photo.id == this.$route.params.id)
        }
    }
}
</script>
