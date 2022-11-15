<template>
    <div>
        <HeaderComponent />

        <main class="view">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<h2>Distribuição de Processos</h2>
                        <form>
                            <div class="form-group">
                                <p class="title-cut">Selecione a área</p>
                                <input type="checkbox" name="civel" id="civel">
                                <label for="civel">Cível</label>
                                <input type="checkbox" name="criminal" id="criminal">
                                <label for="criminal">Criminal</label>
                                <input type="checkbox" name="familia" id="familia">
                                <label for="familia">Familia</label>
                            </div>
                            <div class="form-group">
                                <p class="title-area">Limitar orgão julgador</p>
                                <select name="distribuicao" id="distribution">
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2" selected>Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                            </div>
                            <button class="limiter-save">Distribuição concluída</button>
                        </form>
					</div>

					<div class="col-6">
						<h2>Distribuição</h2>
						<div class="row itens">
							<div class="col-4 title">Nome</div>
							<div class="col-4 title">Vara/Grupo</div>
						</div>

						<div class="list">
							<div class="row itens" v-for="(processo, index) in processos" :key="index">
								<div class="col-4">{{ processo.quantidade }}</div>
								<div class="col-4">{{ processo.categoria }}</div>
								<div class="col-2"></div>
								<div class="col-1">del</div>
								<div class="col-1">edit</div>
							</div>
						</div>

						
					</div>
				</div>
			</div>
		</main>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
    export default {
        name: 'DistributeView',
        components: {
            HeaderComponent
        }
    }
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
		.itens{
			.title{
				font-weight: 600;
				margin: 0 0 5px;
			}
		}
		.list{
			overflow-y: auto;
			max-height:60vh;
			.itens{
				width: 100%;
				position: relative;
				margin: 0;
				border-bottom: 1px solid #cecece;
				padding: 10px 0;
				font-size: 15px;
			}
		}
        .form-group{
            margin: 0 0 20px;
            select{
                widows: 100%;
            }
        }
	}

	.title-area:before,
	.title-cut:before {
		content: "*";
		color: red;
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

	
</style>