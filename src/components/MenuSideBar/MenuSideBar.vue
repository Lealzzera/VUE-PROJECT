<template>
	<nav class="side-menu">
		<router-link class="router-link" to="/">
			<i class="fa-solid fa-house"></i>
			<span>Início</span>
		</router-link>
		<router-link class="router-link" to="/limitador">
			<i class="fa-solid fa-sliders"></i>
			<span>Limitador</span>
		</router-link>

		<router-link class="router-link" to="/distribuir">
			<i class="fa-solid fa-diagram-project"></i>
			<span>Distribuir</span>
		</router-link>

		<router-link class="router-link" to="/relatorio">
			<i class="fa-solid fa-file-invoice"></i>
			<span>Relatório</span>
		</router-link>

		<router-link class="router-link" to="/redistribuir">
			<i class="fa-solid fa-circle-nodes"></i>
			<span>Redistribuir</span>
		</router-link>
	</nav>
</template>

<script>
	export default {
		name: "MenuSideBar",
		components: {},
	};
</script>

<style scoped lang="less">
	.side-menu {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		background: #333333;
		position: absolute;
		display: block;
		left: 0;
		top: 0;
		width: 97px;
		height: 100vh;
		text-decoration: none;
		text-align: center;
		padding-top: 25px;
		z-index: 999;
		.router-link {
			display: block;
			text-decoration: none;
			color: white;
			margin: 0 0 30px;
			transition: 0.3s;
			&:hover {
				color: #37bcbc;
			}
			&.router-link-exact-active {
				color: #37bcbc;
			}
			span {
				display: block;
				margin: 7px 0 0;
			}
		}
	}
</style>
