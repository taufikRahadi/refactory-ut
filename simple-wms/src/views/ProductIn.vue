<template>
    <div>
        <crud-layout
            :formComponent="formComponent"
            :formRecord="form"
            :columns="columns"
        >
            <template v-slot:table-row>
                
            </template>
        </crud-layout>
    </div>
</template>

<script>
    import { Form } from 'vform'
    export default {
        data: () => ({
            columns: [
                'date', 'total in', 'product'
            ],
            formComponent: () => import('../forms/ProductInForm'),
            form: new Form({
                date: '',
                total: 0,
                productId: ''
            })
        })
    }
</script>