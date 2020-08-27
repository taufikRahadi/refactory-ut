<template>
    <div class="flex flex-col justify-start pt-10 h-full bg-gray-200">
        <div id="sidebar-links" class="mx-20">
            <h3 class="text-2xl font-bold border-b-2 border-gray-500 py-5 text-left">Sidebar Links</h3>
            <div 
                class="flex flex-col justify-center py-5 items-start" 
                v-for="route in routes" 
                :key="route.path"
            >
                <router-link :to="{ name: route.name, params: { page: 1 } }">
                    {{ route.name }}
                </router-link>
            </div>
            <slot name="sidebar-item">
                <sidebar-item 
                    v-for="data in data" 
                    :key="data.id" 
                    :model="model" 
                    :title="data.id == 1 ? 'First' : 'Latest'" 
                    :data="data"
                />
            </slot>
        </div>
    </div>
</template>

<script>
import { routes } from '@/router/index'
import SidebarItem from '@/components/SidebarItem.vue'

export default {
    name: 'side-bar',

    components: {
        SidebarItem
    },

    props: ['data', 'model'],

    data: () => ({
        routes
    })
}
</script>