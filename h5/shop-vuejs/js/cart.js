var vm = new Vue({
    el: "#app",
    data: {
        title: "Vuejs",
        message: "hello vuejs",
        list: [{
            "id": 1,
            "name": "wahaha",
            "price": 1
        },
        {
            "id": 2,
            "name": "wahaha99",
            "price": 99
        }]
    },
    filters: {

    },
    mounted: function () {
        console.log("mounted")
        this.init();
    },
    methods: {
        init: function () {
            // this.$http.get("http://localhost:8080/oos/data.json", { id: 123 }).then(function (res) {
            // });
        },
        click_me: function () {
            alert(666);
        }
    }
});