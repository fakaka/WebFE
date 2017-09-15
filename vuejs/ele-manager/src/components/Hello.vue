<template>
	<div>
		home
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			loginForm: {
				username: 'admin',
				password: 'admin',
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				],
			},
			showLogin: true,
		}
	},
	methods: {
	}

}
</script>

<style lang="less" scoped>
</style>
