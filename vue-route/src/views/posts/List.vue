<template>
    <div>
        <list-layout :data="posts">
            <card v-for="post in postsWithPagination" :data="post" :key="post.id">
                <p slot="description" class="text-left font-thin">
                    {{ post.body }} <br />
                    <router-link :to="{ name: 'DetailPost', params: { id: post.id } }">Detail</router-link>
                </p>
            </card>
        </list-layout>
    </div>
</template>

<script>
import fetch from '@/plugins/fetch'

export default {
    data: () => ({
        posts: [],
        totalPages: 0,
    }),

    methods: {
        paginate(arr) {
            const limit = 10
            const page = parseInt(this.$route.params.page)
            const start = (page - 1) * limit
            const end = page * limit
            return arr.slice(start, end)
        }
    },

    computed: {
        postsWithPagination() {
            const data = this.paginate(this.posts)
            return data
        }
    },

    async created() {
        this.$Progress.start()
        try {
            this.posts = await fetch('posts')
            this.totalPages = parseInt(this.posts.length / 10)
            this.$Progress.finish()
        } catch (err) {
            this.$Progress.fail()
        }
    }
}
</script>