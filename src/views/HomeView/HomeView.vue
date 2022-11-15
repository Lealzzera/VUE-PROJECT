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
								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Família</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Cível</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Família</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Cível</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Família</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Cível</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Família</div>
								</div>

								<div class="row itens">
									<div class="col-6 process">50 processos</div>
									<div class="col-6 category">Cível</div>
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
								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
								</div>

								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
								</div>

								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
								</div>

								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
								</div>

								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
									<div class="col-3"></div>
									<div class="col-1"></div>
								</div>

								<div class="row itens">
									<div class="col-4 process">50 processos</div>
									<div class="col-4 category">Cível</div>
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
		name: "HomeView",
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
		.limiter{
			margin: 0 0 20px;
			.itens{
				.title{
					font-weight: 600;
					margin: 0 0 5px;
				}
			}
			h2 {
				font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
				font-size: 24px;
				font-weight: 600;
				margin: 0 0 11px;
			}
			.list{
				overflow-y: auto;
				max-height: 28vh;
				.itens{
					width: 100%;
					position: relative;
					margin: 0;
					border-bottom: 1px solid #cecece;
					padding: 4px 0;
				}
			}
		}
	}
</style>