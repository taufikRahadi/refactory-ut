<template>
    <div>
        <span class="sub-title md:px-20 mt-10 animate__animated animate__fadeIn">{{ title }}</span>
        <div class="grid-3x3 md:px-20 md:grid-cols-3">
            <task-box 
                v-for="task in data" 
                :key="task.id" 
                :task="task"
                :click="click"
            >
                <button class="bg-blue-400 rounded text-white font-semibold px-10 py-3" v-show="showSlot" @click="click(task)">Select</button>
            </task-box>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'title', 'click', 'showSlot'],
}
</script>