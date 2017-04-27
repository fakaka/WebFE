<template>
    <div class="container">
        <!--<icon></icon>-->
        Normal
        <hello></hello>
        <br> withlist
        <hello :class="'aplayer-withlist'"></hello>
        <br> withlrc
        <hello :class="'aplayer-withlrc'"></hello>
        <br> withlist and withlrc
        <hello :class="'aplayer-withlist aplayer-withlrc'"></hello>
        <br> narrow
        <hello :class="'aplayer-narrow'"></hello>
        <br>
    </div>
</template>

<script>
import Hello from './components/Hello'

export default {
    name: 'app',
    components: {
        Hello
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.container {
    width: 600px;
    margin: 0 auto;
}
</style>
