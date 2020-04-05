class Usuario {
    constructor(email, passworld) {
        this.email = email;
        this.passworld = passworld;
    }
    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor () {
        super();
        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com','senha123');
const Admin1 = new Admin('email@teste.com','senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
