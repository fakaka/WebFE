var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
    fetch() {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

var filters = {
    completed: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed
        })
    }
}

var app = new Vue({
    data() {
        return {
            todos: todoStorage.fetch(),
            newTodo: '',
            editedTodo: null,
            visibility: 'all'
        }
    },
    watch: {
        todos: {
            handler(todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    computed: {
        allDone: {
            get() {
                return this.remaining === 0
            },
            set(value) {
                this.todos.forEach(function (todo) {
                    todo.completed = value
                })
            }
        }
    },
    methods: {
        addTodo: function () {
            var value = this.newTodo && this.newTodo.trim()
            if (!value) {
                return
            }
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            })
            this.newTodo = ''
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        editTodo: function (todo) {
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        doneEdit: function (todo) {
            if (!this.editedTodo) {
                return
            }
            this.editedTodo = null
            todo.title = todo.title.trim()
            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        cancelEdit: function (todo) {
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },
        removeCompleted: function () {
            this.todos = filters.active(this.todos)
        }
    },
    directives: {
        'todo-focus': function (el, binding) {
            if (binding.value) {
                el.focus()
            }
        }
    }
})

app.$mount('.todoapp')