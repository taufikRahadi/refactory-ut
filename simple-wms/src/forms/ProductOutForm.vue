<template>
    <div>
        <div class="form-group">
            <label class="input-label">In Date</label>
             <VueTailwindPicker
                @change="(v) => formRecord.date = v"
             >
                 <input class="input-group w-full" type="text" v-model="formRecord.date" />
             </VueTailwindPicker>
        </div>
        <div class="form-group">
            <label class="input-label">Total In</label>
            <input type="number" v-model="formRecord.total" class="input-group">
        </div>
        <div class="form-group">
            <label class="input-label">Product</label>
            <select v-model="formRecord.productId" class="input-group bg-white">
                <option value=""></option>
            </select>
        </div>
    </div>
</template>

<script>
    import VueTailwindPicker from 'vue-tailwind-picker'
    export default {
        props: ['formRecord'],
        components: {
            VueTailwindPicker 
        },
    }
</script>

<style lang="scss" scoped>

</style>