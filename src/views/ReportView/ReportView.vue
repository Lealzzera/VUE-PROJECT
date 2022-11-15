<template>
    <section>
        <HeaderComponent />
         <main class="view">
			<div class="container">
				<div class="row">
                    <div class="col-12">
                        <h2>Relatório de destribuição</h2>
                        <div class="form-group">
                            <p class="title">Área de distribuição</p>
                            <select name="distribuicao" id="distribution">
                                <option value="" selected>Selecione</option>
                                <option value="valor1">Valor 1</option>
                                <option value="valor2">Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>
                        </div>
                    </div>
				</div>

                <div class="row">
                    <div class="col-3">aef</div>
                    <div class="col-2">aef</div>
                    <div class="col-2">aef</div>
                    <div class="col-2">awd</div>
                    <div class="col-2">awd</div>
                    <div class="col-1">awd</div>
                </div>

                 
			</div>
		</main>
    </section>
</template>
<script>

import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
    export default {
        name: 'ReportView',
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
        .title{
            margin: 0 0 10px;
            &:before{
                content: "*";
                color: red;
            }
        }
        .form-group{
            margin: 0 0 20px;
            select{
                width: 100%;
                border-radius: 3px;
                padding: 6px;
                border: 1px solid #a5a5a5;
            }
        }
	}
</style>