<template>
    <nav class="bg-white shadow-sm py-6 text-gray-700 px-20 flex justify-end">
        <div class="flex">
            <router-link to="/">Home</router-link>
            <!-- <router-link class="capitalize ml-10" v-for="route in routes" :key="route.path" :to="route.path">
                {{ route.name }}
            </router-link> -->
        </div>
    </nav>
</template>

<script>
import { routes } from '../router'
export default {
    data: () => ({
        routes: routes
    })
}
</script>