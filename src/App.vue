<template>
  <div id="app">
    <h3 class="font-bold text-center text-6xl text-gray-700">Vue Todo</h3>
    <search-field @search-task="searchTask"></search-field>

    <h2 class="font-bold px-20 text-5xl text-gray-700">Task List</h2>
    <div class="grid grid-cols-3 gap-4 px-20">
      <task-box v-for="task in data" :key="task.id" :task="task"></task-box>
    </div>
  </div>
</template>

<script>
import data from './data'

export default {
  name: 'App',
  data: () => ({
    data: data,
  }),

  methods: {
    searchTask(search) {
      if (search.length >= 3) {
        this.data = data.filter(val => val.title.includes(search))
      } else {
        this.data = data
      }
    }
  },
}
</script>

<style>

</style>
