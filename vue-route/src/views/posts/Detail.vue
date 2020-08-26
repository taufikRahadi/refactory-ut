<template>
    <detail-layout :data="post"></detail-layout>
</template>

<script>
import post from '@/data/posts'
export default {
    data: () => ({
        posts: post,
    }),

    computed: {
        post() {
            const { id } = this.$route.params
            return this.posts.find(post => post.id == id)
        }
    },

    mounted() {
        console.log(this.post)
    }
}
</script>
