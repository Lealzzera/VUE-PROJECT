<template>
	<section>
		<HeaderComponent />
		<main>
			<section>
				<div>
					<h2>Criar limitador</h2>
					<div class="distribution-area">
						<p class="title-area">Área de distribuição</p>
						<select name="distribuicao" id="distribution">
							<option value="valor1">Valor 1</option>
							<option value="valor2" selected>Valor 2</option>
							<option value="valor3">Valor 3</option>
						</select>
					</div>
					<div class="distribution-cut">
						<p class="title-cut">Corte e distribuição</p>
						<p class="advise">Favor preencher apenas uma opção</p>
						<div class="distribution-inputs">
							<input type="text" />
							<p>% da média mensal</p>
						</div>
						<div class="distribution-inputs">
							<input type="text" />
							<p>Número de processos</p>
						</div>
						<button class="limiter-save">Salvar Limitador</button>
					</div>
				</div>
				<div class="limiter">
					<h2>Limitadores em uso</h2>
					<div class="titles">
						<h3>Corte e distribuição</h3>
						<h3 class="area-title">Área de distribuição</h3>
					</div>
					<v-divider></v-divider>
					<v-divider></v-divider>
					<div>
						<ul v-for="(processo, index) in processos" :key="index">
							<li>
								<div class="proccess-itens">
									<span>{{ processo.quantidade }}</span>
									<span>{{ processo.categoria }}</span>
								</div>
								<div class="tools">
									<button class="delete">del</button>
									<button class="edit">edi</button>
								</div>
							</li>
							<v-divider></v-divider>
						</ul>
					</div>
				</div>
			</section>
		</main>
	</section>
</template>
<script>
	import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
	export default {
		data() {
			return {
				processos: [
					{
						quantidade: "50 Processos",
						categoria: "Cível",
					},
					{
						quantidade: "50% da média mensal",
						categoria: "Família",
					},
					{
						quantidade: "25% da média mensal",
						categoria: "Criminal",
					},
				],
			};
		},
		name: "LimiterView",
		components: {
			HeaderComponent,
		},
	};
</script>
<style scoped>
	main {
		padding-top: 80px;
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		min-height: 100vh;
	}

	section {
		display: flex;
	}

	h2 {
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
	}

	.title-area:before,
	.title-cut:before {
		content: " *";
		color: red;
	}

	.distribution-area {
		margin-top: 24px;
	}

	#distribution {
		border: 1px solid #afafaf;
		padding: 0px 8px;
		width: 578.5px;
		height: 36px;
		margin-top: 10px;
	}

	.distribution-inputs input {
		padding: 0px 0px 0px 8px;
		margin-right: 20px;
		margin-bottom: 12px;
		width: 48px;
		height: 24px;
		border: 1px solid #afafaf;
	}

	.distribution-inputs {
		display: flex;
		flex-direction: row;
	}

	.distribution-cut {
		margin-top: 24px;
	}

	.advise {
		font-size: 14px;
		margin: 10px 0px;
	}

	.limiter-save {
		margin-top: 10px;
		width: 578.5px;
		height: 40px;
		background: #333333;
		padding: 8px 20px;
		color: #fff;
	}

	.limiter {
		margin-left: 50px;
		width: 540px;
	}
	.titles {
		display: flex;
		margin-top: 24px;
	}
	h3 {
		font-weight: 400;
		font-size: 16px;
	}

	.delete,
	.edit {
		background: red;
		padding: 5px;
	}

	.area-title {
		margin-left: 60px;
	}

	li {
		display: flex;
		justify-content: space-between;
	}
	.proccess-itens {
		display: flex;
		justify-content: space-between;
		width: 80%;
	}

	.list-distribution {
		overflow-y: auto;
	}
</style>
