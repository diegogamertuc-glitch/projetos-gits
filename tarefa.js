// 2. Criando o array de usuários
var listaDeUsuarios = [];
// 3. Função de cadastro de usuário
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
}
// 4. Função para listar os usuários
function listarUsuarios() {
    console.log("=== Lista de Usuários ===");
    listaDeUsuarios.forEach(function (usuario, index) {
        console.log("Usu\u00E1rio ".concat(index + 1, ":"));
        console.log(" Nome: ".concat(usuario.nome));
        console.log(" Email: ".concat(usuario.email));
        console.log(" Idade: ".concat(usuario.idade));
        console.log(" Status: ".concat(usuario.status ? "Ativo" : "Inativo"));
        console.log("------------------------");
    });
}
// 5. Testando as funções
cadastrarUsuario({ nome: "Ana Silva", email: "ana@email.com", idade: 25, status: true });
cadastrarUsuario({ nome: "João Souza", email: "joao@email.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Maria Santos", email: "maria@email.com", idade: 28, status: true });
// 6. Listando os usuários
listarUsuarios();
