<template>
    <div class="px-5 md:px-20 animate__animated animate__fadeIn">
      <input type="text" v-model="search" class="appearence-none rounded-md w-full p-3 bg-white" placeholder="Search Task">
      <h3 class="text-gray-500 text-lg ml-3 transition-all duration-500 mt-3" v-show="isTyping">{{ message }}</h3>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data: () => ({
        search: '',
        // message: '',
    }),

    computed: {
        isTyping() {
            return this.search.length >= 3
        }
    },

    watch: {
        search: function () {
            // this.message = 'Sedang Mengetik...'
            this.$emit('search-task', this.search)
        },
    }
}
</script>