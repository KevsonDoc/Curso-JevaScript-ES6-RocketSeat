class List {
    constructor() {  //método construtor: primeiro métdo a executar assim que se instanciar uma novo objeto apartir dessas class
        //No constructor podemos fazer ações que disparam assim que o objeto é criado ou iniciar variaveis
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super(); //Método construtor da classe pai
        this.usuario = 'The Doctor';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList(); //instanciando classes
document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');//chamando método
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