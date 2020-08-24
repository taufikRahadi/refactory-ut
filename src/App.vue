<template>
  <div id="app">
    <h3 class="font-bold text-center text-6xl text-gray-700">Vue Todo</h3>
    <search-field :message="message" @search-task="searchTask"></search-field>

    <h2 class="font-bold px-5 md:px-20 text-5xl text-gray-700 animate__animated animate__fadeIn" v-show="filtered">Task List</h2>

    <div v-show="filtered">
      <filtered-task 
        :data="data"
        title="Filtered Data"
      />

      <filtered-task
        :data="unfilteredData"
        title="Unfiltered Data"
      />
    </div>
  </div>
</template>

<script>
import data from './data'

export default {
  name: 'App',
  data: () => ({
    data: [],
    message: '',
    unfilteredData: [],
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
        }, 500)
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
