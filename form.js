Vue.component("main-header", {
	template: 
	`<nav class="white" role="navigation">
		<div class="nav-wrapper container">
			<a id="logo-container" target="_blank" href="http://parnamirim.rn.gov.br" class="brand-logo"><img src="brasao2-mini.png"></a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
	        	<li><span class='black-text'>Solicitação de Cadastro de Funcionário</span></li>
	      	</ul>
		</div>
	</nav>`
});

Vue.component("main-footer", {
	template: 
	`<footer class="page-footer white">
			<div class="container">
				<div class="row">
					<div class="col l6 s12">
						<h5 class="black-text">Sistema de Gestão da Informação</h5>
						<p class="black-text ">O SGI é um sistema desenvolvido pela prefeitura municipal de Parnamirim para controle interno dos funcionários. Realizando seu cadastro, você poderá ter acesso a outros sistemas da prefeitura, como o Sisatendimento, Ponto eletrônico, Protocolo, Almoxarifado, etc.</p>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container black-text">
					© 2018 Grupo de Ciência e Tecnologia da Informação - GCTI
					<a class="black-text text-lighten-4 right" target="_blank" href="http://parnamirim.rn.gov.br">Portal da Prefeitura</a>
				</div>
			</div>
		</footer>`
});

var app = new Vue({
	el: "#app",
	data: {
		funcionario: {
			nome: "",
			cpf: "",
			telefone: "",
			sexo: "",
			dataDeNascimento: "",
			estadoCivil: ""
		},
		page: 1,
		transitionName: "forward"
	},
	computed: {
		actualPage: {
			get: function() {
				return this.page;
			},
			set: function(newValue) {
				document.documentElement.scrollTop = 0;
				this.transitionName = this.page <= newValue ? "forward" : "back";
				this.page = newValue;
			}
		},
		funcionarioDisplay: function() {
			return {
				"Nome": this.funcionario.nome,
				"CPF": this.funcionario.cpf,
				"Telefone": this.funcionario.telefone,
				"Sexo": this.funcionario.sexo,
				"Data de nascimento": this.funcionario.dataDeNascimento,
				"Estado civil": this.funcionario.estadoCivil
			}
		}
	},
	methods: {
		sendData: function(funcionario) {
			console.log(funcionario);
		}
	}
})