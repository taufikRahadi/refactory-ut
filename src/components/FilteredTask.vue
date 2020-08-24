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
                <button class="border-2 text-blue-400 m-2 border-blue-400 rounded-full text-white font-semibold w-24" v-show="showSlot" @click="click(task)">Select</button>
            </task-box>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'title', 'click', 'showSlot'],
}
</script>