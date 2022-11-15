<template>
	<section>
		<HeaderComponent />

		<main class="view">
			<div class="container">
				<div class="row">
					<div class="col-7">
						<div class="limiter">
							<h2>Limitadores em uso</h2>
							<div class="list">
								<div
									class="row itens"
									v-for="(
										{ quantidadeProcessos, categoria }, key
									) in processos"
									:key="key"
								>
									<div class="col-6 process">
										{{ quantidadeProcessos }}
									</div>
									<div class="col-6 category">
										{{ categoria }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-7">
						<div class="limiter">
							<h2>Distribuições recentes</h2>
							<div class="row itens">
								<div class="col-4 title">Processos</div>
								<div class="col-4 title">Classificação</div>
							</div>
							<div class="list">
								<div
									class="row itens"
									v-for="(
										{ processos, categoria }, key
									) in distribuidos"
									:key="key"
								>
									<div class="col-4 process">
										{{ processos }}
									</div>
									<div class="col-4 category">
										{{ categoria }}
									</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
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
						quantidadeProcessos: "50 processos",
						categoria: "Cívil",
					},
					{
						quantidadeProcessos: "20 processos",
						categoria: "Família",
					},
					{
						quantidadeProcessos: "33 processos",
						categoria: "Cívil",
					},
					{
						quantidadeProcessos: "150 processos",
						categoria: "Criminal",
					},
					{
						quantidadeProcessos: "40 processos",
						categoria: "Criminal",
					},
				],
				distribuidos: [
					{
						processos: "33 processos",
						categoria: "Cívil",
					},
					{
						processos: "21 processos",
						categoria: "Família",
					},
					{
						processos: "43 processos",
						categoria: "Criminal",
					},
					{
						processos: "33 processos",
						categoria: "Cívil",
					},
				],
			};
		},
		name: "HomeView",
		components: {
			HeaderComponent,
		},
	};
</script>

<style scoped lang="less">
	main {
		padding-top: 100px;
		padding-left: 32px;
		font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		max-height: 100vh;
		.limiter {
			margin: 0 0 20px;
			.itens {
				.title {
					font-weight: 600;
					margin: 0 0 5px;
				}
			}
			h2 {
				font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
				font-size: 24px;
				font-weight: 600;
				margin: 0 0 20px;
				padding: 0 0 15px;
				border-bottom: 2px solid #cecece;
			}
			.list {
				overflow-y: auto;
				max-height: 28vh;
				.itens {
					width: 100%;
					position: relative;
					margin: 0;
					border-bottom: 1px solid #cecece;
					padding: 10px 0;
					.category,
					.process {
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
