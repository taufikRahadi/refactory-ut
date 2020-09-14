<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="bg-transparent z-40 absolute animate__animated animate__fadeIn text-center py-4 lg:px-4" v-show="showAlert">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">Barang telah di hapus dari keranjang</span>
          <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <div v-if="cartItems.length > 0">
          <div class="card mb-5" v-for="(item, index) in items" :key="item.ID">
            <div class="flex">
              <img src="https://picsum.photos/id/1/200" alt="">
              <div class="flex w-full justify-between px-3 py-5">
                <h3 class="font-bold text-lg text-gray-700 capitalize">
                  {{ item.Title }}
                  <p class="text-gray-600 font-light">
                    {{ item.Description }}
                  </p>
                </h3>
                <div class="flex h-10">
                  <button class="btn" @click="reduceQuantity(index)" :disabled="item.Quantity <= 1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                  </button>
                  <span class="p-5 bg-gray-300 text-bold" :key="item.Quantity">
                    {{ item.Quantity }}
                  </span>
                  <button class="btn" @click="addQuantity(index)">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  </button>
                </div>
              </div>
              <button class="btn" @click="removeItem(index)">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex justify-center">
          <div class="text-center">
            <img src="@/assets/empty-cart.svg" class="h-64" alt="">
            <h3 class="font-bold text-gray-700 text-2xl">
              Keranjang Kosong Nyaring Bunyinya
            </h3>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="card py-5 px-5">
          <div class="flex justify-between py-1">
            <h3 class="font-bold uppercase text-gray-700">
              Total
            </h3>
            <p>
              {{ total | currency }}
            </p>
          </div>
          <div class="flex justify-between py-1">
            <h3 class="font-bold uppercase text-gray-700">
              PPN
            </h3>
            <p>
              {{ PPN | currency }}
            </p>
          </div>
          <div class="flex justify-between py-1">
            <h3 class="font-bold uppercase text-gray-700">
              SubTotal
            </h3>
            <p>
              {{ subTotal | currency }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      cartItems: 'cart'
    }),
    ...mapGetters({
      subTotal: 'cartSubTotal',
      total: 'cartTotal',
      PPN: 'cartPPN'
    })
  },
  data: () => ({
    showAlert: false,
    items: null
  }),
  methods: {
    ...mapMutations(['popFromCart', 'addQuantity', 'reduceQuantity']),
    removeItem(item) {
      const conf = confirm('Yakin Mau Dihapus ?')
      this.popFromCart(item)
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 1300)
    }
  },
  mounted() {
    this.items = this.cartItems
  }
}
</script>
