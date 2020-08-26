<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="m-4 text-left">
            <span class="font-black text-gray-700">
                <p class="border-b-2 pb-2">{{ data.title | capitalize }}</p>
            </span>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: ['data'],
}
</script>