<template>
    <transition name="fade" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
      <div class="card animate__animated">
        <img class="w-full h-40 object-cover" :src="product.imgUrl" alt="Sunset in the mountains">
        <div class="px-6 py-4 flex flex-col">
          <div class="font-bold text-xl h-18 mb-2 capitalize">{{ product.name }}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.price | currency }}</span>
        </div>
        <div class="px-6 pt-4 pb-4">
          <button class="bg-indigo-500 text-white hover:scale-105 transform rounded px-8 py-2" @click="$emit('add-to-cart', product)">Add To Cart</button>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  props: ['product']
}
</script>
