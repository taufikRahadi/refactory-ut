<template>
    <div class="my-5">
        <div class="flex justify-between">
            <h1 class="text-4xl capitalize font-semibold">
                {{ $route.name }}
            </h1>

            <button @click="showModal = true" class="flex bg-indigo-500 px-5 text-white rounded hover:bg-indigo-700 transition duration-500 font-bold">
                <svg viewBox="0 0 20 20" fill="currentColor" class="plus-circle w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                <span class="ml-3">Add New</span>
            </button>
        </div>
        <div class="mt-5">
            <card>
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
            </card>
            <vue-tailwind-modal
                :showing="showModal"
                @close="showModal = false"
                :showClose="true"
                class="h-auto"
            >
                <form enctype="multipart/form-data" @submit.prevent="submitForm">
                    <component :is="formComponent" :formRecord="formRecord"></component>
                    <div class="flex justify-between mx-5">
                        <button class="bg-gray-500 text-white px-5 py-2 capitalize rounded">
                            close
                        </button>
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
        props: ['columns', 'formComponent', 'formRecord'],
        data: () => ({
            showModal: false
        }),

        methods: {
            submitForm() {
                alert('FormSubmitted')
            }
        },

        mounted() {
            this.$Progress.start()
            this.$Progress.finish()
        }
    }
</script>