<template>
  <div>
    <div class="py-5 bg-teal-400 text-white">
      <div class="flex items-center justify-between px-20">
        <div class="flex mr-10 items-center">
          <img src="@/assets/log.png" class="h-16" alt="">
          <h3 class="font-black text-3xl">
            Gatau
          </h3>
        </div>
        <div class="flex justify-end w-full">
          <input v-show="$route.name === 'book list'" @keyup="$store.dispatch('searchData', search)" v-model="search" type="text" class="text-white focus:bg-white focus:text-gray-700 px-4 rounded-full w-30 bg-transparent border-2 border-gray-400 mr-5" placeholder="Search ...">
          <router-link class="nav-link" :to="{ name: 'book list' }">
            Books
          </router-link>
          <router-link class="nav-link" :to="{ name: 'cart' }">
            Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: ''
  })
}
</script>
