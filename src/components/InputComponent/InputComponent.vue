<template>
	<div>
		<input type="text" class="input-text" />
		<button>
			<img src="@/assets/lupa-icon.svg" alt="" />
		</button>
	</div>
</template>
<script>
	export default {
		name: "InputComponent",
	};
</script>

<style scoped>
	.input-text {
		padding: 8px 13px;
		width: 246px;
		height: 32px;
		background: #ffffff;
		border-radius: 4px;
	}

	button {
		position: absolute;
		top: -4px;
		margin-top: 24px;
		margin-left: -34px;
		cursor: pointer;
	}
</style>
