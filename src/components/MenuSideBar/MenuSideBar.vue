<template>
	<nav class="side-menu">
		<router-link class="router-link" to="/">
			<HomeIcon />
			<span>Início</span>
		</router-link>
		<router-link class="router-link" to="/limitador">
			<LimiterIcon />
			<span>Limitador</span>
		</router-link>

		<router-link class="router-link" to="/distribuir">
			<DistributeIcon />
			<span>Distribuir</span>
		</router-link>

		<router-link class="router-link" to="/relatorio">
			<ReportIcon />
			<span>Relatório</span>
		</router-link>

		<router-link class="router-link" to="/redistribuir">
			<RedistributeIcon />
			<span>Redistribuir</span>
		</router-link>
	</nav>
</template>

<script>
	import HomeIcon from "@/components/Icons/HomeIcon.vue";
	import LimiterIcon from "@/components/Icons/LimiterIcon.vue";
	import DistributeIcon from "@/components/Icons/DistributeIcon.vue";
	import ReportIcon from "@/components/Icons/ReportIcon.vue";
	import RedistributeIcon from "@/components/Icons/RedistributeIcon.vue";

	export default {
		name: "MenuSideBar",
		components: {
			HomeIcon,
			LimiterIcon,
			DistributeIcon,
			ReportIcon,
			RedistributeIcon,
		}
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
		.router-link{
			display: block;
			text-decoration: none;
			color: white;
			margin: 0 0 30px;
			transition: 0.3s;
			&:hover{
				color: #37BCBC;
			}
			&.router-link-exact-active{
				color: #37BCBC;
			}
			span{
				display: block;
				margin: 7px 0 0;
			}
		}
	}
	
</style>
