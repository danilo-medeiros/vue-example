var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: false
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{text: "Learn Vue"},
			{text: "Learn Node.js"},
			{text: "Build a small app"}
		]
	}
});

var app5 = new Vue({
	el: "#app-5",
	data: {
		link: "https://www.google.com.br"
	}
});

var app6 = new Vue({
	el: "#app-6",
	data: {
		message: "Hello Vue.js!"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

Vue.component('todo-item', {
	template: '<li>This is a todo</li>'
})

var app7 = new Vue({
	el: "#app-7",
	data: {
		person: {
			firstName: "Danilo",
			lastName: "Medeiros"
		}
	}
})

