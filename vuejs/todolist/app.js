var defaultTodos = ['完成LeetCode或者HackerRank一个题目', '俯卧撑', '视频的一章', '书的一章', '收藏夹的一个', '微博的赞']
var TODOS_KEY = 'everyday-todos'
var LASTDAY_KEY = 'lastday'
var RECORD_KEY = 'records'

var todoStorage = {
    fetch() {
        var todos = JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
        todos.forEach((todo, index) => {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save(todos) {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    },
    reset(today) {
        var lastDay = localStorage.getItem(LASTDAY_KEY)
        localStorage.setItem(LASTDAY_KEY, today)
        if (!lastDay) {
            return
        }
        if (lastDay != today) {
            var todos = JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
            let a = 0, b = 0
            todos.forEach((todo, index) => {
                if (todo.completed) {
                    a++
                }
                b++
                todo.completed = false
            })
            this.save(todos)
            this.record(lastDay, Math.floor(a * 100 / b))
        }
    },
    record(day, percent) {
        var records = JSON.parse(localStorage.getItem(RECORD_KEY) || '{}')
        var todos = JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
        records[day] = percent + '%'
        localStorage.setItem(RECORD_KEY, JSON.stringify(records))
    }
}
var today = new Date().toLocaleDateString()
todoStorage.reset(today)


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