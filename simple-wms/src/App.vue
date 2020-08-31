<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <div class="grid grid-cols-6">
      <div class="col-span-1">
        <side-bar></side-bar>
      </div>
      <div class="col-span-5">
        <nav-bar></nav-bar>
        <router-view class="px-10"/>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-200;
}
</style>
