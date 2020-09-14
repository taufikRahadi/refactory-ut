<template>
  <div class="relative">
    <div class="flex justify-center items-center">
      <div class="bg-transparent z-40 absolute animate__animated animate__fadeIn text-center py-4 lg:px-4" v-show="showAlert">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">Item Added To Your Cart</span>
          <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div class="card" v-for="item in items" :key="item.ID">
        <img :src="`https://picsum.photos/id/${item.ID}/400/400`" class="card-img">
        <div class="badge opacity-75">
          <svg class="w-5 inline-block clock h-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
          <span class="mr-3 ml-3">{{ item.PageCount }} Pages</span>
        </div>
        <div class="m-5">
          <h3 class="font-bold text-lg text-gray-700">
            {{ item.Title }}
          </h3>
          <p class="font-light text-gray-600">
            {{ item.Description }}
          </p>
          <div class="flex justify-between w-full items-center">
            <h3 class="text-gray-500 font-bold">
              {{ item.Price | currency }}
            </h3>
            <button class="btn mt-5" @click="addItemToCart(item)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['items'])
  },
  data: () => ({
    showAlert: false
  }),
  methods: {
    ...mapMutations(['pushToCart']),
    addItemToCart(item) {
      this.showAlert = true
      this.pushToCart(item)
      setTimeout(() => {
        this.showAlert = false
      }, 1300)
    }
  }
}
</script>
