<template>
    <div>
        <crud-layout
            :columns="columns"
            :formComponent="productForm"
            :formRecord="form"
        >
            <template v-slot:table-row>
                <tr>
                    
                </tr>
            </template>
        </crud-layout>
    </div>
</template>

<script>
import { Form } from 'vform'
export default {
    data: () => ({
        productForm: () => import('../forms/ProductForm'),
        form: new Form({
            name: '',
            stock: 0,
            price: 0,
            photo: null
        }),
        columns: [
            'name', 'stock', 'price', 'created at'
        ]
    })
}
</script>