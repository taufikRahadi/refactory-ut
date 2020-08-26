<template>
    <card :data="data">
        <slot></slot>
    </card>
</template>

<script>
import fetch from '@/plugins/fetch'
export default {
    props: ['data']
}
</script>
