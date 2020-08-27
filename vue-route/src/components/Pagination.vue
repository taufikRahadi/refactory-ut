<template>
    <div class="flex justify-end border-b-2">
        <router-link :to="{ name: $route.name, params: { page: index } }" v-for="index in totalPages" :key="index">
            <span class="rounded-full bg-white border-2 shadow px-3 py-1">
                {{ index }}
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['totalPages'],
}
</script>