import axios from 'axios';
//1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
};

umPorSegundo();

//2
class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch {
            console.warn('Erro na API');
        }
    };
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log('Repo Econtr')
        } catch {
            console.warn('Repositório não encontrado');
        }
    }
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response.data);
        } catch {
            console.warn('Usuaario não existe');
        }
    };
}
Api.getUserFromGithub('KevsonDoc');
Api.getUserFromGithub('KevsonDoc1233123123');

//3
Api.getRepositories('rocketseat/rocketseat.com.br');
Api.getRepositories('rocketseat/dslkvmskv');

//4

Api.getRepositories('KevsonDoc');