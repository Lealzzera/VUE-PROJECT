<template>
	<div>
		<HeaderComponent />
		<ModalProcess v-if="modal" @open="modal = false" />

		<main class="view">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<h2>Distribuição de Processos</h2>
						<form>
							<div class="form-group">
								<p class="title">Selecione a área</p>

								<!-- TODO: AJUSTAR OS CHECKBOX POIS ESTÃO BUGADOS AO DESELECIONAR A OPÇÃO -->
								<div class="check_group">
									<input
										type="checkbox"
										name="civel"
										id="civel"
									/>
									<i class="fa-solid fa-square-check"></i>
									<label for="civel">Cível</label>
								</div>

								<div class="check_group">
									<input
										type="checkbox"
										name="criminal"
										id="criminal"
									/>
									<i class="fa-solid fa-square-check"></i>
									<label for="criminal">Criminal</label>
								</div>

								<div class="check_group">
									<input
										type="checkbox"
										name="familia"
										id="familia"
									/>
									<i class="fa-solid fa-square-check"></i>
									<label for="familia">Familia</label>
								</div>
							</div>
							<div class="form-group">
								<p class="title">Limitar orgão julgador</p>
								<select name="distribuicao" id="distribution">
									<option value="valor1">Valor 1</option>
									<option value="valor2" selected>
										Valor 2
									</option>
									<option value="valor3">Valor 3</option>
								</select>
							</div>
							<p>
								<a @click="stateModal()" class="open_modal">{{ processos.length }} processos</a> pendentes de
								distribuição
							</p>
							<button class="limiter-save">
								Distribuir processos
							</button>
						</form>
					</div>

					<div class="col-6">
						<h2>Distribuição</h2>
						<div class="row itens">
							<div class="col-4 title">Processos</div>
							<div class="col-4 title">Classificação</div>
						</div>

						<div class="list">
							<div
								class="row itens"
								v-for="(processo, index) in processos"
								:key="index"
							>
								<div class="col-4 process">
									{{ processo.quantidade }}
								</div>
								<div class="col-4 classification">
									{{ processo.categoria }}
								</div>
								<div class="col-2"></div>
								<div class="col-1 delete">
									<button>
										<i class="fa-solid fa-trash"></i>
									</button>
								</div>
								<div class="col-1 edit">
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
	</div>
</template>
<script>
	import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
	import ModalProcess from "@/components/modalProcess/modalProcess.vue";
	export default {
		name: "DistributeView",
		components: {
			HeaderComponent,
			ModalProcess,
		},
		data() {
			return {
				modal: false,
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
		methods: {
			stateModal(){
				this.modal = true
			},
		}
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
		.form-group {
			margin: 0 0 20px;
			.check_group {
				display: inline-block;
				position: relative;
				i {
					display: none;
					position: absolute;
					top: 0;
					left: 0;
					font-size: 20px;
					color: #8bc97b;
					z-index: 9;
				}
				input[type="checkbox"] {
					width: 18px;
					height: 18px;
					z-index: 999;
					position: absolute;
					cursor: pointer;
					&:checked {
						opacity: 0;
						z-index: 999;
						~ i {
							display: block;
						}
					}
				}
			}
			select {
				width: 100%;
				border-radius: 3px;
				padding: 6px;
				border: 1px solid #a5a5a5;
			}
			label {
				margin: 0 20px 0 25px;
				line-height: 14px;
				top: -2px;
				position: relative;
			}
			.title {
				margin: 0 0 10px;
				&:before {
					content: "*";
					color: red;
				}
			}
		}
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

	.limiter-save {
		margin-top: 10px;
		width: 100%;
		height: 40px;
		background: #333333;
		padding: 8px 20px;
		color: #fff;
	}
	.open_modal{
		cursor: pointer;
		text-decoration: none;
	}
</style>
