// 1. Definindo a interface Usuario
interface Usuario {
    nome: string;
    email: string;
    idade: number;
    status: boolean;
}

// 2. Criando o array de usuários
let listaDeUsuarios: Usuario[] = [];

// 3. Função de cadastro de usuário
function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario);
}

// 4. Função para listar os usuários
function listarUsuarios(): void {
    console.log("=== Lista de Usuários ===");
    listaDeUsuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}:`);
        console.log(` Nome: ${usuario.nome}`);
        console.log(` Email: ${usuario.email}`);
        console.log(` Idade: ${usuario.idade}`);
        console.log(` Status: ${usuario.status ? "Ativo" : "Inativo"}`);
        console.log("------------------------");
    });
}

// 5. Testando as funções
cadastrarUsuario({ nome: "Ana Silva", email: "ana@email.com", idade: 25, status: true });
cadastrarUsuario({ nome: "João Souza", email: "joao@email.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Maria Santos", email: "maria@email.com", idade: 28, status: true });

// 6. Listando os usuários
listarUsuarios();
