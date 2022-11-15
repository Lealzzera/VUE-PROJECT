<template>
	<section>
		<HeaderComponent />
		<main>
			<h2>Limitadores em uso</h2>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<div class="list-distribution">
				<div class="proccess-item">
					<span class="proccess-quantity">50 processos</span>
					<span class="category">Cível</span>
				</div>
				<v-divider></v-divider>
				<div class="proccess-item">
					<span class="proccess-quantity">30% da média mensal</span>
					<span class="category">Família</span>
				</div>
				<v-divider></v-divider>
				<div class="proccess-item">
					<span class="proccess-quantity">50 processos</span>
					<span class="category">Cível</span>
				</div>
				<v-divider></v-divider>
				<div class="proccess-item">
					<span class="proccess-quantity">50 processos</span>
					<span class="category">Cível</span>
				</div>
				<v-divider></v-divider>
				<div class="proccess-item">
					<span class="proccess-quantity">50 processos</span>
					<span class="category">Cível</span>
				</div>
				<v-divider></v-divider>
				<div class="proccess-item">
					<span class="proccess-quantity">25% da média mensal</span>
					<span class="category">Criminal</span>
				</div>
			</div>
			<v-divider></v-divider>
			<h2 class="distribuition">Distribuições recentes</h2>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<div class="distribuition-content">
				<h3>Processos</h3>
				<h3 class="classification">Classificação</h3>
			</div>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<div>
				<ul class="list-distribution">
					<li class="distribution-list">
						<span>6 processos</span>
						<span class="classification-item"
							>Classificação 01</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>54 processos</span>
						<span class="classification-item"
							>Classificação 02</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>36 processos</span>
						<span class="classification-item"
							>Classificação 03</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>16 processos</span>
						<span class="classification-item"
							>Classificação 04</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>6 processos</span>
						<span class="classification-item"
							>Classificação 01</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>54 processos</span>
						<span class="classification-item"
							>Classificação 02</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>36 processos</span>
						<span class="classification-item"
							>Classificação 03</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>16 processos</span>
						<span class="classification-item"
							>Classificação 04</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>6 processos</span>
						<span class="classification-item"
							>Classificação 01</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>54 processos</span>
						<span class="classification-item"
							>Classificação 02</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>36 processos</span>
						<span class="classification-item"
							>Classificação 03</span
						>
					</li>
					<v-divider></v-divider>
					<li class="distribution-list">
						<span>16 processos</span>
						<span class="classification-item"
							>Classificação 04</span
						>
					</li>
					<v-divider></v-divider>
				</ul>
			</div>
		</main>
	</section>
</template>

<script>
	import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";

	export default {
		name: "HomeView",
		components: {
			HeaderComponent,
		},
	};
</script>

<style scoped>
	main {
		padding-top: 120px;
		padding-left: 32px;
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		max-height: 100vh;
	}

	.distribuition {
		margin-top: 40px;
	}

	h2 {
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
	}

	.proccess-item {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 500px;
		margin: 25px 0px;
		margin-right: 70px;
		font-weight: bold;
	}

	.distribuition-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 15px 0px;
	}

	h3 {
		font-weight: 400;
		font-size: 16px;
	}

	.classification {
		margin-right: 170px;
	}

	.classification-item {
		margin-right: 140px;
	}

	.distribution-list {
		display: flex;
		justify-content: space-between;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 25px 0px;
		font-weight: bold;
	}

	.list-distribution {
		overflow-y: auto;
		max-height: 30vh;
	}
</style>
