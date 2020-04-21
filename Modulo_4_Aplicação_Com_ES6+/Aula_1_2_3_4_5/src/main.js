class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }
    
    //Registra os eventos
    registerHandlers() {
        this.formEl.onsubmit = envent => this.addRepository(envent);
    }

    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat/gostack-template-fundamentos-reactjs',
        });

        console.log(this.repositories)
    }
}

new App();