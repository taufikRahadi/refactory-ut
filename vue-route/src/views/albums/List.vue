<template>
    <list-layout :data="albums" model="Album" />
</template>

<script>
import albums from '@/data/albums'
export default {
    data: () => ({
        albums: albums,
    }),
}
</script>
