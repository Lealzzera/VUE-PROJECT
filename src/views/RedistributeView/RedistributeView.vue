<template>
	<section>
		<HeaderComponent />

		<main class="view">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Redistribuir processos</h2>
						<div class="sub">
							processos que retornaram ao SISCONT
						</div>
					</div>
				</div>

				<div class="row separator">
					<div class="col-6">
						<div class="form-group">
							<p class="title">Selecione a área</p>
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
					</div>

					<div class="col-6">
						<div class="input_content">
							<input
								type="text"
								placeholder="Pesquise pelo numero do processo"
								class="input-text"
							/>
							<button>
								<img src="@/assets/lupa-icon.svg" alt="" />
							</button>
						</div>
					</div>
				</div>

				<div class="row button">
					<div class="col-2">
						<button>Redistribuir</button>
					</div>
					<div class="col-10"></div>
				</div>

				<div class="row">
					<div class="col-12">
						<div class="row itens">
							<div class="col-1"></div>
							<div class="col-3 title number">Número</div>
							<div class="col-3 title">Área</div>
							<div class="col-3 title">Orgão julgador</div>
						</div>
						<div class="list">
							<div
								class="row itens"
								v-for="(processo, index) in processos"
								:key="index"
							>
								<div class="col-1"></div>
								<div class="col-3 number">
									{{ processo.numero }}
								</div>
								<div class="col-3">
									{{ processo.area }}
								</div>
								<div class="col-3">
									{{ processo.orgao }}
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
		name: "RedistributeView",
		components: {
			HeaderComponent,
		},
		data() {
			return {
				processos: [
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
					{
						numero: "123456789",
						area: "Limitador 01",
						orgao: "Cível",
					},
				],
			};
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
		.sub {
			margin: 0 0 30px;
		}
		.itens {
			border-bottom: 1px solid #cecece;
			padding: 10px 0;
			.title {
				font-weight: 600;
				margin: 0 0 5px;
			}

			.number {
				color: #266b9e;
			}
		}
		.row.button {
			button {
				background-color: rgba(51, 51, 51, 0.5);
				color: #fff;
				font-size: 14px;
				padding: 8px 0px;
				text-align: center;
				width: 100%;
				border-radius: 3px;
			}
		}
		.list {
			overflow-y: auto;
			max-height: 50vh;
			padding: 0;
			.itens {
				width: 100%;
				position: relative;
				margin: 0;
				border-bottom: 1px solid #cecece;
				padding: 35px 0;
				font-size: 15px;
			}
		}
		.separator {
			border-bottom: 2px solid #cecece;
			padding: 0 0 6px;
			margin: 0 0 22px;
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
				margin: 0 20px 0 24px;
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

		.input_content {
			position: relative;
			text-align: right;
			padding: 20px 0 0;
			.input-text {
				padding: 8px 12px;
				line-height: 12px;
				width: 305px;
				background: #ffffff;
				border-radius: 4px;
				border: 2px solid #cecece;
			}

			button {
				position: absolute;
				top: 4px;
				margin-top: 24px;
				margin-left: -34px;
				cursor: pointer;
			}
		}
	}
</style>
