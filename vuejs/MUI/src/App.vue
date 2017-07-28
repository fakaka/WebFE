<template>
    <div id="app">
        <toast :message="'可以'"></toast>
    </div>
</template>

<script>
import Toast from './toast'


export default {
    name: 'app',
    components: {
        Toast
    }
}
</script>

<style>

</style>
