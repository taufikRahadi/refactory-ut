<template>
    <div class="mb-5 text-gray-700 flex flex-col justify-between">
        <h3 class="font-black">{{ title }}</h3>
        <slot :data="data">
            <h3 class="font-light">
                {{ data.title | capitalize }}
            </h3>
            <router-link class="text-teal-400" :to="{ name: `Detail${model}`, params: { id: data.id } }">
                Detail
            </router-link>
        </slot>
    </div>
</template>

<script>
export default {
    props: ['data', 'model', 'title'],
}
</script>
