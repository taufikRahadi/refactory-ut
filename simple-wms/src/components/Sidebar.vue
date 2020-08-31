<template>
    <div class="bg-indigo-500 text-white flex h-screen flex-col">
        <div class="bg-indigo-400">
            <h3 class="text-lg font-black px-5 py-10">Logo</h3>
        </div>
        <div class="px-5 py-10 flex flex-col">
            <router-link class="capitalize mb-10 ml-10" v-for="route in routes[1].children" :key="route.name" :to="{ name: route.name }">
                {{ route.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import { routes } from '../router'
export default {
    data: () => ({
        routes: routes
    })
}
</script>