new Vue({
    el: '#app',
    filters: {
        capitalize: (val) => {
            if (!val) return ''
            return val.toString().charAt(0).toUpperCase() + val.slice(1)
        }
    },

    data: () => ({
        todos: [
            {
                name: "Kasi Makan Kucing",
                status: false,
                showed: true
            },
            {
                name: "Kasi Makan Kucing Lagi",
                status: false,
                showed: true
            },
            {
                name: "Kasi Makan Kucing Terus",
                status: true,
                showed: true
            },
            {
                name: "ulang ulang terus kasi makan kucing",
                status: false,
                showed: true
            }
        ],

        taskName: ''
    }),

    methods: {
        removeTask(task) {
            const check = confirm('Are you sure want to remove task?')
            check ? this.todos.splice(task, 1) : ''
        },

        setTaskDone(index) {
            const state = this.todos[index].status
            this.todos[index].status = state ? false : true
            alert("Task " + this.todos[index].name + " has been set updated")
        },

        addTask() {
            if(!this.taskName) return alert('Dont leave it empty!')
            this.todos.push({ name: this.taskName, status: false, showed: true })
            alert("Task Added")
            this.taskName = ''
        },
    }
})