function Vue(options) {
    this.data = options.data
    var data = this.data

    observe(data, this)

    var id = options.el

    var dom = nodeToFragment(document.getElementById(id), this)

    document.getElementById(id).appendChild(dom)
}


function nodeToFragment(node, vm) {
    var dom = document.createDocumentFragment()
    var child
    while (child = node.firstChild) {
        compile(child, vm)
        dom.appendChild(child)
    }
    return dom
}

function compile(node, vm) {
    if (node.nodeType == 1) {
        var attrs = node.attributes

        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].nodeName == 'v-model') {
                let name = attrs[i].nodeValue
                node.value = vm.data[name]
                node.addEventListener('input', (e) => {
                    vm[name] = e.target.value
                })
                node.removeAttribute('v-model')
            }
        }
    }

    if (node.nodeType == 3) {
        const reg = /\{\{(.*)\}\}/
        if (reg.test(node.nodeValue)) {
            let name = RegExp.$1
            name = name.trim()
            // node.nodeValue = vm[name]

            new Watcher(vm, node, name)
        }
    }
}

function defineReactive(obj, key, val) {
    var dep = new Dep()

    Object.defineProperty(obj, key, {
        get() {
            if (Dep.target) {
                dep.addSubs(Dep.target)
            }
            return val
        },
        set(newVal) {
            if (val === newVal) return
            val = newVal
            console.log(val)
            dep.notify()
        }
    })
}


function observe(obj, vm) {
    Object.keys(obj).forEach((key) => {
        defineReactive(vm, key, obj[key])
    })
}

function Dep() {
    this.subs = []
}

Dep.prototype = {
    addSubs(sub) {
        this.subs.push(sub)
    },
    notify() {
        this.subs.forEach((sub) => {
            sub.update()
        })
    }
}

function Watcher(vm, node, name) {
    Dep.target = this
    this.vm = vm
    this.name = name
    this.node = node

    this.update()
    Dep.target = null
}

Watcher.prototype = {
    get() {
        this.value = this.vm[this.name]
    },
    update() {
        this.get()
        this.node.nodeValue = this.value
    },
}






