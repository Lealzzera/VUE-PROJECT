<template>
	<div class="modal_process">
        <div class="box">
            <div class="container">
                <div class="close" @click="closeModal()">x</div>
                <div class="title">Distribuição de processos</div>
                
                <div class="row search">
                    <div class="col-12">
                        <input placeholder="pesquisar pelo número" type="text">
                        <button>p</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 sub">Processo</div>
                    <div class="col-2 sub">Área</div>
                    <div class="col-4 sub">Órgão julgador</div>
                </div>

                <div
                    class="row"
                    v-for="(processo, index) in processos"
                    :key="index"
                >
                    <div class="col-6 content"><span>{{processo.numero}}</span></div>
                    <div class="col-2 content"><span>{{processo.area}}</span></div>
                    <div class="col-4 content"><span>{{processo.orgao}}</span></div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		name: "ModalProcess",
        props: ['open'],
        data () {
            return{
                stateModal: this.open,
                processos: [
					{
						numero: "983491384613460183",
						area: "Cível",
						orgao: "1ª Camara Civel"
					},
					{
						numero: "983491384613460183",
						area: "Cível",
						orgao: "1ª Camara Civel"
					},
                    {
						numero: "983491384613460183",
						area: "Cível",
						orgao: "1ª Camara Civel"
					},
                    {
						numero: "983491384613460183",
						area: "Cível",
						orgao: "1ª Camara Civel"
					},
                    {
						numero: "983491384613460183",
						area: "Cível",
						orgao: "1ª Camara Civel"
					},
				],
            }
        },
        methods: {
            closeModal(){
                console.log(this.stateModal)
                this.$emit(false)
            }
        }

	};
</script>
<style scoped lang="less">
	.modal_process{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
        z-index: 99999;
        .box{
            position: absolute;
            width: 500px;
            max-height: 550px;
            top: 50%;
            left: 50%;
            background-color: #fff;
            overflow-y: auto;
            transform: translate(-50%,-50%);
            padding: 0;
            .container{
                max-width: 100% !important;
                padding: 0;
            }
            .close{
                cursor: pointer;
                position: absolute;
                top: 5px;
                right: 11px;
            }
            .title{
                width: 100%;
                text-align: left;
                color: #333;
                background-color: #dadac5;
                font-weight: 600;
                padding: 10px;
                margin: 0 0 20px;
            }
            .row{
                width: 100%;
                padding: 0 20px;
                margin: 0 0 15px;
                position: relative;
                input{
                    width: 100%;
                    border: 1px solid #cecece;
                    padding: 5px 12px 6px;
                    font-size: 14px;
                    border-radius: 5px;
                }
                button{
                    position: absolute;
                    right: 51px;
                    top: 0px;
                }
                .sub{
                    font-weight: 600;
                }
                .content{
                    padding: 0 0 15px;
                    border-bottom: 1px solid #cecece;
                    span{
                        font-size: 15px;
                        line-height: 17px;
                        color: #266B9E;
                        background-color: rgba(38, 105, 156, 0.164);
                        display: inline-block;
                        padding: 0 12px;
                        width: 100%
                    }
                }
            }
        }
    }

	@import "~bootstrap/dist/css/bootstrap.css";
</style>
