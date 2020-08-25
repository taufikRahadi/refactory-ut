<template>
    <transition name="fade" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">

      <div class="container px-10 md:px-20 mt-10">
        <div class="grid grid-cols-4 gap-4">
          <product-card 
            v-for="product in products"
            :key="product.price"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
      </div>

    </transition>
</template>

<script>
export default {
    props: ['products', 'addToCart'],
}
</script>
