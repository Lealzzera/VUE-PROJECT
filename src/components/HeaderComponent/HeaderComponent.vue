<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-3">
					<span v-if="!isHome">Seja bem-vindo ao SISCONT</span>
					<button v-if="isHome">Importar Processos</button>
				</div>
				<div class="col-9"></div>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: "HeaderComponent",
		props: ["isHome"],
	};
</script>
<style scoped lang="less">
	header {
		z-index: 99;
		background: #dadac5;
		position: absolute;
		top: 0;
		left: 0;
		height: 64px;
		width: 100%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		.container {
			padding-top: 16px;
			padding-bottom: 16px;
			span {
				font-size: 16px;
				line-height: 33px;
				display: block;
			}
			.col-1 {
				text-align: right;
				padding: 5px 0;
			}
		}
	}

	button {
		width: 184px;
		height: 36px;
		background: #333333;
		color: #fff;
		gap: 8px;
	}

	@import "~bootstrap/dist/css/bootstrap.css";
</style>
