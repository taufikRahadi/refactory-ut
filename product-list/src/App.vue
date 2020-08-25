<template>
  <div id="app" class="mb-10">
    <app-bar @search-products="searchProducts"></app-bar>
    <cart 
      :items="productCart"
      @remove-item="removeProductFromCart"
      v-show="productCart.length > 0"
    />
    <div class="mt-10 flex justify-center">
      <alert class="opacity-75 hover:opacity-100" :text="alertText" v-show="isShowAlert" />
    </div>

    <product-list
      :products="products"
      :addToCart="addProductToCart"
    />
  </div>
</template>

<script>
import products from '../product-lis'

export default {
  name: 'App',

  data: () => ({
    products: products,
    productCart: [],
    alertText: '',
    isShowAlert: false
  }),

  methods: {
    removeProductFromCart(item) {
      this.productCart.splice(this.productCart.indexOf(item), 1)
      this.alertText = 'Product has been removed'
      this.isShowAlert = true
      setTimeout(() => {
        this.isShowAlert = false
      }, 2000)
    },

    addProductToCart(item) {
      this.productCart.push(item)
      this.alertText = 'Product added to your cart'
      this.isShowAlert = true
      setTimeout(() => {
        this.isShowAlert = false
      }, 2000)
    },

    searchProducts(query) {
      if(query) {
        this.products = products.filter(item => item.name.toLowerCase().includes(query))
      } else {
        this.products = products
      }
    }
  },
}
</script>
