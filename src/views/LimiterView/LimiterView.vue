<template>
	<section>
		<HeaderComponent />

		<main class="view">
			<div class="container">
				<div class="row">
					<div class="col-6">
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
							<p class="advise">
								Favor preencher apenas uma opção
							</p>

							<div class="distribution-inputs">
								<input class="radio" type="radio" />
								<p class="label_no_limiter">Sem limitador</p>
							</div>
							<div class="distribution-inputs">
								<input class="radio" type="radio" />
								<input class="type_text" type="text" />
								<p>% da média mensal</p>
							</div>
							<div class="distribution-inputs">
								<input class="radio" type="radio" />
								<input class="type_text" type="text" />
								<p>Número de processos</p>
							</div>
							<button class="limiter-save">
								Salvar Limitador
							</button>
						</div>
					</div>

					<div class="col-6">
						<h2>Limitadores em uso</h2>
						<div class="row itens">
							<div class="col-4 title">Nome</div>
							<div class="col-4 title">Vara/Grupo</div>
						</div>

						<div class="list">
							<div
								class="row itens"
								v-for="(processo, index) in processos"
								:key="index"
							>
								<div class="col-4">
									{{ processo.quantidade }}
								</div>
								<div class="col-4">
									{{ processo.categoria }}
								</div>
								<div class="col-2"></div>
								<div class="col-1">
									<button>
										<i class="fa-solid fa-trash"></i>
									</button>
								</div>
								<div class="col-1">
									<button>
										<i class="fa-solid fa-pen"></i>
									</button>
								</div>
							</div>
						</div>
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
						quantidade: "Limitador 01",
						categoria: "Cível",
					},
					{
						quantidade: "Limitador 02",
						categoria: "Família",
					},
					{
						quantidade: "Limitador 03",
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
		.itens {
			.title {
				font-weight: 600;
				margin: 0 0 5px;
			}
		}
		.list {
			overflow-y: auto;
			max-height: 60vh;
			.itens {
				width: 100%;
				position: relative;
				margin: 0;
				border-bottom: 1px solid #cecece;
				padding: 10px 0;
				font-size: 15px;
			}
		}
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
		width: 100%;
		height: 36px;
		margin-top: 10px;
	}

	.distribution-inputs{
		.type_text{
			padding: 0px 0px 0px 8px;
			margin-right: 20px;
			margin-bottom: 12px;
			width: 48px;
			height: 24px;
			border: 1px solid #afafaf;
		}
		.radio{
			display: inline-block;
			margin: 0 12px 0 0;
			top: -5px;
			position: relative;
		}
		.label_no_limiter{
			position: relative;
			top: -6px;
		}
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
		width: 100%;
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
