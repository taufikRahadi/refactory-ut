<template>
  <div id="app">
    <h3 class="font-bold text-center text-6xl text-gray-700">Vue Todo</h3>
    <div class="px-20">
      <input type="text" v-model="search" class="appearence-none rounded-md w-full p-3 bg-white" placeholder="Search Task">
      <h3 class="text-gray-500 text-lg ml-3 transition-all duration-500 mt-3">{{ message }}</h3>
    </div>

    <h2 class="font-bold px-20 text-5xl text-gray-700">Task List</h2>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 px-20">
      <div class="card" v-for="task in data" :key="task.id">
        <div class="flex justify-center">
          <img :src="task.thumbnailUrl" alt="" />
          <div class="m-5">
            <h3 class="font-semibold text-lg">
              {{ task.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data'

export default {
  name: 'App',
  data: () => ({
    data: data,
    search: '',
    message: ''
  }),

  methods: {
    searchTask() {
      const data = this.data
      this.data = data.filter(val => val.title.includes(this.search))
    }
  },

  watch: {
    search: function () {
      this.message = 'Sedang Mengetik...'
      this.data = data.filter(val => val.title.includes(this.search))
    },
    deep: true,
  },
}
</script>

<style>

</style>
