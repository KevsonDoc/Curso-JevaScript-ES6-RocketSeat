class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'The Doctor';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}
MinhaLista.mostraUsuario();

/* Retorna Um erro
class TodoList2 {
    constructor() {
        this.todos = [];
    }
    static addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}
TodoList2.addTodo();
TodoList2.addTodo();
TodoList2.addTodo();
TodoList2.addTodo();
*/

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));