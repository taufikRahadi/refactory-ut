<template>
    <div class="px-20">
      <input type="text" v-model="search" class="appearence-none rounded-md w-full p-3 bg-white" placeholder="Search Task">
      <h3 class="text-gray-500 text-lg ml-3 transition-all duration-500 mt-3">{{ message }}</h3>
    </div>
</template>

<script>
export default {
    // props: ['searchTask'],
    // props: ['search', 'message'],
    data: () => ({
        search: '',
        message: '',
    }),

    watch: {
        search: function () {
            this.message = 'Sedang Mengetik...'
            this.$emit('search-task', this.search)
        },
    }
}
</script>