<template>
	<nav class="side-menu">
		<div class="menu-option">
			<router-link class="router-link" to="/">
				<button class="button-menu">
					<HomeIcon />
					Início
				</button>
			</router-link>
		</div>
		<div class="menu-option">
			<router-link class="router-link" to="/limitador">
				<button class="button-menu">
					<LimiterIcon />
					Limitador
				</button>
			</router-link>
		</div>
		<div class="menu-option">
			<router-link class="router-link" to="/distribuir">
				<button class="button-menu">
					<DistributeIcon />
					Distribuir
				</button>
			</router-link>
		</div>
		<div class="menu-option">
			<router-link class="router-link" to="/relatorio">
				<button class="button-menu">
					<ReportIcon />
					Relatório
				</button>
			</router-link>
		</div>
		<div class="menu-option">
			<router-link class="router-link" to="/redistribuir">
				<button class="button-menu">
					<RedistributeIcon />
					Redistribuir
				</button>
			</router-link>
		</div>
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

<style scoped>
	.side-menu {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		background: #333333;
		display: flex;
		flex-direction: column;
		width: 97px;
		height: 100vh;
		text-decoration: none;
		align-items: center;
		padding-top: 25px;
	}

	.menu-option {
		cursor: pointer;
		padding-bottom: 35px;
		text-decoration: none;
	}

	.router-link {
		text-decoration: none;
		color: white;
	}

	.button-menu {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
