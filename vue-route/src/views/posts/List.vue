<template>
    <div>
        <list-layout model="Post" :data="posts">
            <template v-slot:card="{dataWithPagination}">
                <card v-for="post in dataWithPagination" :data="post" :key="post.id">
                    <p slot="description" class="text-left font-thin">
                        {{ post.body }} <br />
                        <router-link class="font-semibold text-teal-400" :to="{ name: 'DetailPost', params: { id: post.id } }">Detail</router-link>
                    </p>
                </card>
            </template>
        </list-layout>
    </div>
</template>

<script>
import posts from '@/data/posts'

export default {
    data: () => ({
        posts: posts,
    }),
}
</script>