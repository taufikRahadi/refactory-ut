<template>
    <list-layout :data="albums" />
</template>

<script>
import albums from '@/data/albums'
export default {
    data: () => ({
        albums: albums,
    }),
}
</script>
