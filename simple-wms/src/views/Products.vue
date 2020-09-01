<template>
    <div>
        <crud-layout
            :columns="columns"
            :formComponent="productForm"
            :formRecord="form"
            :isLoading="isLoading"
            modulename="product"
            @reset-data="resetData"
            :customSubmitAction="submitAction"

        >
            <template v-slot:table-row>
                <tr :class="index % 2 == 0 ? 'bg-gray-200' : ''" v-for="(product, index) in $store.state.product.products.data" :key="product.id">
                    <td class="px-4 py-3">
                        {{ index + 1 }}
                    </td>
                    <td class="px-4 py-3">
                        {{ product.name | capitalize }}
                    </td>
                    <td class="px-4 py-3">
                        {{ product.stock | stock }}
                    </td>
                    <td class="px-4 py-3">
                        {{ product.price | currency }}
                    </td>
                    <td class="px-4 py-3">
                        {{ product.supplier.full_name }}
                    </td>
                    <td class="w-8">
                        <action-button 
                            :record="product"
                            :formRecord="form"
                            modulename="product"
                            @fill-data="fillData"
                        />
                    </td>
                </tr>
            </template>
        </crud-layout>
    </div>
</template>

<script>
export default {
    data: () => ({
        isLoading: true,
        productForm: () => import('../forms/ProductForm'),
        form: {
            id: '',
            name: '',
            stock: 0,
            price: 0,
            photo: null
        },
        columns: [
            'name', 'stock', 'price', 'supplier name'
        ]
    }),

    methods: {
        async submitAction () {
            this.$Progress.start()
            const formData = new FormData()
            if (this.$store.state.isEditing) {
                formData.append('id', this.form.id)
                formData.append('name', this.form.name)
                formData.append('stock', this.form.stock)
                formData.append('price', this.form.price)
                formData.append('photo', this.form.photo)
                try {
                    await this.$store.dispatch('product/updateData', { id: this.form.id, data: formData })
                    this.$Progress.finish()
                    this.$swal.fire(
                        'Success',
                        'Data Updated',
                        'success'
                    )
                    this.$store.commit('setShowModal', false)
                } catch (err) {
                    this.$Progress.fail()
                    this.$swal.fire(
                        'Failed',
                        'Fail Updating Data',
                        'error'
                    )
                }
            } else {
                formData.append('name', this.form.name)
                formData.append('stock', this.form.stock)
                formData.append('price', this.form.price)
                formData.append('photo', this.form.photo)
                try {
                    await this.$store.dispatch('product/createData', formData)
                    this.$Progress.finish()
                    this.$swal.fire(
                        'Success',
                        'Data Created',
                        'success'
                    )
                    this.$store.commit('setShowModal', false)
                } catch (err) {
                    this.$Progress.fail()
                    this.$swal.fire(
                        'Failed',
                        'Fail Creating Data',
                        'error'
                    )
                }
            }
        },
        fillData (data) {
            this.form = { ...data, photo: data.photo_url }
        },
        resetData () {
            this.form = {
                name: '',
                stock: 0,
                price: 0,
                photo: null
            }
        }
    },

}
</script>