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
            'full name', 'username', 'email', 'phone number', 'role', 'created at'
        ],
        formComponent: () => import('../forms/UserForm'),
        form: new Form({
            full_name: '',
            email: '',
            password: '',
            phone_number: '',
            username: ''
        })
})
}
</script>