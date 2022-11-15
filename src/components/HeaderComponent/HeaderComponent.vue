<template>
	<header>
		<div class="header-left">
			<span>Seja bem-vindo ao SISCONT</span>
            <InputComponent />
		</div>
		<div>
			<button class="engrenagem">
				<img src="@/assets/engrenagem-icon.svg" alt="engrenagem" />
			</button>
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
<style scoped>
	header {
		background: #dadac5;
		height: 64px;
		width: 100vw;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
        font-size: 14px;
	}

	.engrenagem {
		margin-left: 496px;
	}
    .header-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: -119px;
    }

    span {
        margin-right: 40px;
    }
</style>
