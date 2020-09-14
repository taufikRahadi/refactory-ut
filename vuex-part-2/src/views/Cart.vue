<template>
  <div>
    <card-list 
      :showAlert="showAlert"
      alertTitle="Barang dihapus dari keranjang"
      :gridCols="3"
    >
      <div class="col-span-2">
        <div v-if="cartItems.length > 0">
          <base-card class="flex mb-5" v-for="(item, index) in items" :key="item.ID">
              <img :src="`https://picsum.photos/id/${item.ID}/200`" alt="">
              <div class="flex w-full justify-between px-3 py-5">
                <h3 class="font-bold text-lg text-gray-700 capitalize">
                  {{ item.Title }}
                  <p class="text-gray-600 font-serif font-light">
                    {{ item.Description }}
                  </p>
                </h3>
                <div class="flex h-10">
                  <button class="btn-primary" @click="reduce(index)" :disabled="item.Quantity <= 1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                  </button>
                  <span class="pb-2 px-3 pt-2 bg-gray-300 text-bold" :key="renderElement">
                    {{ item.Quantity }}
                  </span>
                  <button class="btn-primary" @click="add(index)">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  </button>
                </div>
              </div>
              <button class="btn-danger px-5" @click="removeItem(index)">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
          </base-card>
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
        <button class="btn-primary px-5 w-full mt-2" @click="checkout">
          Checkout
        </button>
      </div>
    </card-list>
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
    items: null,
    renderElement: 0
  }),
  methods: {
    ...mapMutations(['popFromCart', 'addQuantity', 'reduceQuantity', 'fakeCheckout']),
    add(item) {
      this.renderElement++
      this.addQuantity(item)
    },
    reduce(item) {
      this.renderElement--
      this.reduceQuantity(item)
    },
    removeItem(item) {
      const conf = confirm('Yakin Mau Dihapus ?')
      if (conf) {
        this.popFromCart(item)
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 1300)
      }
    },
    checkout() {
      const conf = confirm('Sebentar Lagi Checkout Ya')
      if (conf) {
        this.showAlert = true
        this.fakeCheckout()
        setTimeout(() => {
          this.showAlert = false
        }, 1300)
      }
    }
  },
  mounted() {
    this.items = this.cartItems
  }
}
</script>
