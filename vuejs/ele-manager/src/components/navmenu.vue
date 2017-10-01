<template>
	<div>
		<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group> -->
		<el-menu default-active="song" class="el-menu-vertical-demo" style="min-height: 100%;" @open="handleOpen"
		    @close="handleClose" :collapse="isCollapse" router>
			<!-- <el-menu-item index="home">
				<i class="el-icon-menu"></i>首页
			</el-menu-item> -->
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-message"></i>
					<span slot="title">信息管理</span>
				</template>
				<el-menu-item index="user">用户管理</el-menu-item>
				<el-menu-item index="song">歌曲管理</el-menu-item>
				<el-menu-item index="blog">博客管理</el-menu-item>
				<el-menu-item index="weibo">微博管理</el-menu-item>
				<el-menu-item index="todo">清单管理</el-menu-item>
				<el-menu-item index="download">下载管理</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-edit"></i>
					<span slot="title">开发相关</span>
				</template>
				<el-menu-item index="clawer">数据抓取</el-menu-item>
				<el-menu-item index="interface">接口管理</el-menu-item>
				<el-menu-item index="image">图床</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">设置</span>
				</template>
				<el-menu-item index="setting">基本设置</el-menu-item>
				<el-menu-item index="system">系统设置</el-menu-item>
			</el-submenu>
		</el-menu>
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
			isCollapse: false
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		toggleCollapse() {
			this.isCollapse = !this.isCollapse
		}
	},
	computed: {
		defaultActive: function() {
			return this.$route.path.replace('/', '');
		}
	}

}
</script>

<style lang="less" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		// width: 200px;
		min-height: 400px;
	}
</style>
