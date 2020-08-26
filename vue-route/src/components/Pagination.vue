<template>
    <div class="flex justify-end border-b-2">
        <span class="rounded-full bg-white border-2 shadow px-3 py-1" v-for="index in totalPages" :key="index">
            <router-link :to="{ name: $route.name, params: { page: index } }">{{ index }}</router-link>
        </span>
    </div>
</template>

<script>
export default {
    props: ['totalPages'],
}
</script>