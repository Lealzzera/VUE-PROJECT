<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-1"></div>
				<div class="col-3"><span>Seja bem-vindo ao SISCONT</span></div>
				<div class="col-3"><InputComponent /></div>
				<div class="col-3"></div>
				<div class="col-1"></div>
				<div class="col-1">
					<button class="engrenagem">
						<img src="@/assets/engrenagem-icon.svg" alt="engrenagem" />
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
import InputComponent from '@/components/InputComponent/InputComponent.vue';
	export default {
		name: "HeaderComponent",
        components: {
            InputComponent
        }
	};
</script>
<style scoped lang="less">
	header {
		background: #dadac5;
		position: absolute;
		top: 0;
		left: 0;
		height: 64px;
		width: 100%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 14px;
		.container{
			padding-top: 16px;
			padding-bottom: 16px;
			span{
				font-size: 14px;
				line-height: 33px;
				display: block;
			}
			.col-1{
				text-align: right;
				padding: 5px 0;
			}
		}
	}

  @import'~bootstrap/dist/css/bootstrap.css';
</style>
