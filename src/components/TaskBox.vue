<template>
    <div>
        <div class="card">
            <div class="flex justify-center">
                <img :src="task.thumbnailUrl" :alt="`${task.title}_image`" />
                <div class="m-5">
                    <h3 class="font-semibold text-lg">
                        {{ task.title }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>