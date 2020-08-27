<template>
    <list-layout :data="photosWithRelation" model="Photo">
        <template v-slot:card="{dataWithPagination}">
            <card v-for="photo in dataWithPagination" :data="photo" :key="photo.id">
                <img :src="photo.thumbnailUrl" class="w-full h-32 object-cover" slot="image" :alt="photo.title + 'photos'">
                <router-link slot="description" :to="{ name: 'DetailPhoto', params: { id: photo.id } }">Detail</router-link>
            </card>
        </template>
        <template v-slot:widget="{ featuredData }">
            <sidebar-item :title="data.id > 1 ? 'Latest' : 'First'" v-for="data in featuredData" :key="data.id" :data="data">
                <template v-slot="{ data }">
                    <div class="flex">
                        <img :src="data.thumbnailUrl" class="h-16 mr-2" :alt="data.album.title">
                        <h3 class="font-bold text-gray-700">
                            {{ data.title | capitalize }}
                            <p class="text-gray-500 text-sm">
                                {{ data.album.title }}
                            </p>
                        </h3>
                    </div>
                    <router-link class="text-teal-400" :to="{ name: 'DetailPhoto', params: { id: data.id } }">
                        Read More
                    </router-link>
                </template>
            </sidebar-item>
        </template>
    </list-layout>
</template>

<script>
import photos from '@/data/photos'
import albums from '@/data/albums'
import SidebarItem from '@/components/SidebarItem.vue'

export default {
    components: {
        SidebarItem
    },

    data: () =>({
        photos: photos,
    }),

    computed: {
        photosWithRelation() {
            return this.photos.map(photo => {
                photo['album'] = albums.find(album => album.id === photo.albumId)
                return photo
            })
        }
    },
}
</script>
