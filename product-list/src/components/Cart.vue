<template>
    <div class="flex flex-col px-20 items-center justify-center mt-20">
        <h1 class="font-black text-2xl text-gray-700">Product Cart</h1>
        <div class="flex items-center w-1/2 justify-between" v-for="item in items" :key="item.name">
            <img :src="item.imgUrl" alt="" class="h-20">
            <h3 class="font-bold text-lg">{{ item.name }}</h3>
            <div class="flex">
                <h3 class="mr-2 rounded-lg bg-gray-200 p-4 font-semibold text-gray-700">{{ item.price | currency }}</h3>
                <button class="bg-gray-200 rounded-lg p-4 font-semibold text-gray-700" @click="removeItem">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items'],

    methods: {
        removeItem() {
            this.$emit('remove-item', this.item)
        }
    }
}
</script>