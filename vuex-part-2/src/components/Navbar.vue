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
  
}
</script>
