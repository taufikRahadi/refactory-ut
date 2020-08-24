<template>
    <div>
        <div class="card hover:scale-105 transition-all duration-300 transform animate__animated animate__fadeIn">
            <div class="flex justify-center flex-col">
                <img :src="task.thumbnailUrl" class="h-32 object-cover" :alt="`${task.title}_image`" />
                <div class="m-5">
                    <h3 class="font-semibold text-lg">
                        {{ task.title }}
                    </h3>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>