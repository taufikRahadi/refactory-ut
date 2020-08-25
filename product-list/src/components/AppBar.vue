<template>
    <div class="bg-indigo-500">
        <div class="py-5 px-20 flex justify-between">
            <div class="flex items-center">
                <img alt="Vue logo" class="h-8" src="../assets/logo.png">
                <h3 class="text-white ml-3 font-bold text-lg">VueShop</h3>
            </div>

            <div class="flex items-center">
                <input class="bg-transparent appearance-none border-2 border-gray-300 rounded-full w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-white focus:text-black focus:border-purple-500" type="text" v-model="search" @keyup="searchIt" placeholder="Search">
                <span class="text-white text-lg ml-10"><svg viewBox="0 0 20 20" fill="currentColor" class="shopping-cart w-6 h-10"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        search: ''
    }),

    methods: {
        searchIt() {
            this.$emit('search-products', this.search)
        }
    }
}
</script>