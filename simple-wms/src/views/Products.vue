<template>
    <div>
        <crud-layout
            :columns="columns"
            :formComponent="productForm"
            :formRecord="form"
            :isLoading="isLoading"
            modulename="product"
            @reset-data="resetData"
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
import { Form } from 'vform'
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
        fillData (data) {
            this.form = { ...data }
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

    async mounted () {
        
    }
}
</script>