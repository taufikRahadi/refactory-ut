<template>
  <div id="app">
    <h3 class="font-bold text-center text-6xl text-gray-700">Vue Todo</h3>
    <search-field :message="message" @search-task="searchTask"></search-field>

    <h2 class="font-bold px-5 md:px-20 text-5xl text-gray-700 animate__animated animate__fadeIn animate__delay-1s">Task List</h2>
    <span class="text-lg text-gray-700 px-5 md:px-20" v-show="filtered">Filtered Task</span>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5 px-5 md:px-20">
      <task-box v-for="task in data" :key="task.id" :task="task"></task-box>
    </div>
    <div v-show="filtered">
      <span class="text-lg text-gray-700 px-5 md:px-20">Unfiltered Task</span>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 px-5 md:px-20">
        <task-box 
          v-for="task in unfilteredData"
          :key="task.id"
          :task="task"
        />
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
    message: '',
    unSelectedData: [],
    filtered: false
  }),

  methods: {
    searchTask(search) {
      if (search.length >= 3) {
        this.message = 'Searching Task. . .'
        setTimeout(() => {
          this.data = data.filter(val => val.title.includes(search))
          this.unfilteredData = data.filter(val => !val.title.includes(search))
          this.message = ''
          this.filtered = true
        }, 2000)
      } else {
        this.filtered = false
        this.data = data
      }
    }
  },
}
</script>

<style>

</style>
