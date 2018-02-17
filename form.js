Vue.component("main-header", {
	template: `<nav class="white" role="navigation">
	<div class="nav-wrapper container">
		<a id="logo-container" href="#" class="brand-logo"><img src="brasao2-mini.png"></a>
		<ul id="nav-mobile" class="right hide-on-med-and-down">
        	<li><span>Solicitação de cadastro de usuário no SGI</span></li>
      	</ul>
	</div>
</nav>`
});

var app = new Vue({
	el: "#app",
	data: {
		funcionario: {
			
		},
		page: 1
	},
	computed: {
		
	}
})