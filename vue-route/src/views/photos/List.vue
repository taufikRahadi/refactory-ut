<template>
    <list-layout :data="photos">
        <template v-slot:card="{dataWithPagination}">
            <card v-for="photo in dataWithPagination" :data="photo" :key="photo.id">
                <img :src="photo.thumbnailUrl" class="w-full h-32 object-cover" slot="image" :alt="photo.title + 'photos'">
                <router-link slot="description" :to="{ name: 'DetailPhoto', params: { id: photo.id } }">Detail</router-link>
            </card>
        </template>
    </list-layout>
</template>

<script>
import photos from '@/data/photos'
export default {
    data: () =>({
        photos: photos,
    }),
}
</script>
