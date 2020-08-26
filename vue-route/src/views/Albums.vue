<template>
    <list-layout :data="albums" />
</template>

<script>
import fetch from '@/plugins/fetch'
export default {
    data: () => ({
        albums: [],
    }),
    async created() {
        this.$Progress.start()
        try {
            this.albums = await fetch('albums')
            this.$Progress.finish()
        } catch(err) {
            this.$Progress.fail()
        }
    }
}
</script>
