<template>
    <detail-layout :data="album"/>
</template>

<script>
import albums from '@/data/albums'
export default {
    computed: {
        album() {
            return albums.find(album => album.id == this.$route.params.id)
        }
    },
}
</script>
