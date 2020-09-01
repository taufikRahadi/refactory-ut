<template>
    <div class="my-5">
        <div class="flex justify-between">
            <h1 class="text-4xl capitalize font-semibold">
                {{ $route.name }}
            </h1>

            <button @click="showModal" class="flex bg-indigo-500 px-5 text-white rounded hover:bg-indigo-700 transition duration-500 font-bold">
                <svg viewBox="0 0 20 20" fill="currentColor" class="plus-circle w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                <span class="ml-3">Add New</span>
            </button>
        </div>
        <div class="mt-5">
            <card>
                <div class=" p-5">
                    <table class="table-auto w-full">
                        <thead class="border-t-2 border-b-2">
                            <th class="w-auto px-4 py-2">#</th>
                            <th class="px-4 py-2 capitalize" v-for="column in columns" :key="column">
                                {{ column }}
                            </th>
                            <th class="w-auto px-4 py-2">
                                
                            </th>
                        </thead>
                        <tbody>
                            <slot name="table-row"></slot>
                        </tbody>
                    </table>
                </div>
            </card>
            <vue-tailwind-modal
                :showing="$store.state.isShowModal"
                @close="$store.commit('setShowModal', false)"
                :showClose="true"
                class="h-auto"
            >
                <form enctype="multipart/form-data" @submit.prevent="submitForm">
                    <component :is="formComponent" :formRecord="formRecord"></component>
                    <div class="flex justify-between mx-5">
                        <button type="submit" class="bg-indigo-500 text-white px-5 py-2 capitalize rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </vue-tailwind-modal>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'formComponent', 'formRecord', 'isLoading', 'modulename'],

        methods: {
            async getData() {
                this.$Progress.start()
                try {
                    await this.$store.dispatch(`${this.modulename}/fetchAll`)
                    this.$Progress.finish()
                } catch (error) {
                    this.$Progress.fail()
                }
            },
            
            async submitForm() {
                if(!this.$store.state.isEditing) {
                    try {
                        await this.$store.dispatch(`${this.modulename}/createData`, this.formRecord)
                        this.$swal.fire(
                            'Success',
                            'Data Created',
                            'success'
                        )
                        this.$store.commit('setShowModal', false)
                    } catch (error) {
                        this.$swal.fire(
                            'Failed',
                            'Error creating Data',
                            'error'
                        )
                    }
                } else {
                    this.$Progress.start()
                    try {
                        await this.$store.dispatch(`${this.modulename}/updateData`, this.formRecord)
                        this.$swal.fire(
                            'Success',
                            'Data Updated',
                            'success'
                        )
                        this.$Progress.finish()
                        this.$store.commit('setShowModal', false)
                    } catch (err) {
                        this.$swal.fire(
                            'Failed',
                            'Error updating Data',
                            'error'
                        )
                        this.$Progress.fail()
                    }
                }
            },

            showModal () {
                this.$store.commit('setShowModal', true)
                this.$store.commit('setIsEditing', false)
                this.$emit('reset-data')
            }
        },

        mounted() {
            this.getData()
        }
    }
</script>