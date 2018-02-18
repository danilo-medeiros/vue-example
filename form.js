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

	}
})