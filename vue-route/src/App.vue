<template>
  <div id="app" class="text-gray-700">
    <nav-bar></nav-bar>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
    <!-- 
    <div class="grid grid-cols-3">
      <div class="col-span-2 px-5 py-5">
        <h3 class="font-bold text-2xl text-gray-700 text-left">
          {{ $route.name }}
        </h3>
        <vue-progress-bar></vue-progress-bar>
        <router-view></router-view>
      </div>
      <div class="col-span-1">
        <side-bar></side-bar>
      </div>
    </div> -->
  </div>
</template>
