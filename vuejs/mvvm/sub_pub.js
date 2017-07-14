var sub1 = {
    update() {
        console.log(1)
    }
}
var sub2 = {
    update() {
        console.log(2)
    }
}
var sub3 = {
    update() {
        console.log(3)
    }
}

function Dep() {
    this.subs = [sub1, sub2, sub3]
}

Dep.prototype.notify = function () {
    this.subs.forEach((sub) => {
        sub.update()
    })
}

var dep = new Dep()

var pub = {
    publish() {
        dep.notify()
    }
}

pub.publish()