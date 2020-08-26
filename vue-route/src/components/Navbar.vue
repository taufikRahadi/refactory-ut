<template>
    <div>
        <div class="bg-gray-800 text-gray-100 flex flex-col w-full">
            <div class="flex justify-center items-center py-5 px-20">
                <img alt="Vue logo" class="h-10" src="../assets/logo.png">
                <h3 class="text-lg font-black text-white ml-5">
                    VueBlog
                </h3>
            </div>
        </div>
        <div class="flex justify-end bg-gray-700 py-2 px-20 text-gray-100">
            <div class="py-2 pl-10 flex justify-center items-center" v-for="route in routes" :key="route.path">
                <router-link class="font-bold" :to="{ name: route.name, params: { page: 1 } }">{{ route.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { routes } from '@/router/index'

export default {
    name: 'nav-bar',
    data: () => ({
        routes: routes
    })
}
</script>
