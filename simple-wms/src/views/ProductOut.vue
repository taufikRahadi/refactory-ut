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
                'date', 'total out', 'product'
            ],
            formComponent: () => import('../forms/ProductOutForm'),
            form: new Form({
                date: '',
                total: 0,
                productId: ''
            })
        })
    }
</script>