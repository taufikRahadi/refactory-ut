<template>
    <div>
        <span class="sub-title md:px-20 animate__animated animate__fadeIn">{{ title }}</span>
        <div class="grid-3x3 md:px-20 md:grid-cols-3">
            <task-box 
                v-for="task in data" 
                :key="task.id" 
                :task="task"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'title']
}
</script>