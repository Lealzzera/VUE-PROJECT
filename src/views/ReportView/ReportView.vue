<template>
	<section>
		<HeaderComponent />
		<main class="view">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Relatório de distribuição</h2>
						<div class="form-group">
							<p class="title">Área de distribuição</p>
							<select name="distribuicao" id="distribution">
								<option value="" selected>Selecione</option>
								<option value="valor1">Valor 1</option>
								<option value="valor2">Valor 2</option>
								<option value="valor3">Valor 3</option>
							</select>
						</div>
					</div>
				</div>

				<div class="row row-title">
					<div class="col-3">Classificação</div>
					<div class="col-2">Intimações</div>
					<div class="col-2">Pareceres</div>
					<div class="col-3">Retornos sem parecer</div>
					<div class="col-2">Saldo</div>
				</div>
				<div class="list">
					<div
						class="row row-itens"
						v-for="(
							{
								classificacao,
								intimacoes,
								pareceres,
								retornos,
								saldo,
							},
							key
						) in processos"
						:key="key"
					>
						<div class="col-3 classification">
							{{ classificacao }}
						</div>
						<div class="col-2">{{ intimacoes }}</div>
						<div class="col-2">{{ pareceres }}</div>
						<div class="col-3">{{ retornos }}</div>
						<div class="col-2 balance">{{ saldo }}</div>
					</div>
				</div>
			</div>
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
						classificacao: "Classificação 01",
						intimacoes: "32",
						pareceres: "24",
						retornos: "16",
						saldo: "8",
					},
					{
						classificacao: "Classificação 02",
						intimacoes: "56",
						pareceres: "89",
						retornos: "34",
						saldo: "32",
					},
					{
						classificacao: "Classificação 03",
						intimacoes: "4565",
						pareceres: "213",
						retornos: "65",
						saldo: "2",
					},
					{
						classificacao: "Classificação 04",
						intimacoes: "23",
						pareceres: "09",
						retornos: "56",
						saldo: "44",
					},
					{
						classificacao: "Classificação 05",
						intimacoes: "32",
						pareceres: "24",
						retornos: "16",
						saldo: "8",
					},
					{
						classificacao: "Classificação 06",
						intimacoes: "34",
						pareceres: "3",
						retornos: "675",
						saldo: "56",
					},
				],
			};
		},
		name: "ReportView",
		components: {
			HeaderComponent,
		},
	};
</script>

<style scoped lang="less">
	main {
		padding-top: 100px;
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		max-height: 100vh;
		h2 {
			font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
			font-size: 24px;
			font-weight: 600;
			margin: 0 0 11px;
		}
		.title {
			margin: 0 0 10px;
			&:before {
				content: "*";
				color: red;
			}
		}
		.form-group {
			margin: 0 0 20px;
			select {
				width: 100%;
				border-radius: 3px;
				padding: 6px;
				border: 1px solid #a5a5a5;
			}
		}

		.row-title {
			padding: 15px 0;
			border-bottom: 2px solid #cecece;
		}

		.list {
			overflow-y: auto;
			max-height: 60vh;
			.row-itens {
				border-bottom: 2px solid #cecece;
				padding: 45px 0;
				position: relative;
				width: 100%;
				margin: 0;

				.classification,
				.balance {
					color: #266b9e;
				}

				.balance {
					font-weight: bold;
				}
			}
		}
	}
</style>
