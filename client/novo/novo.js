Template.novo.events({
	"submit form": function (e, template) {
		e.preventDefault();

		var input = $("#tarefa");
		var nome = input.val();

		Tarefas.insert({nome: nome, data: new Date()});
		input.val("");
	},



});