// 1. Importando o Express
// Estamos "puxando" o código do framework Express que instalamos para dentro do nosso arquivo.
const express = require('express');

// 2. Inicializando o Express
// Criamos uma "instância" do Express, que chamaremos de 'app'. É essa variável
// que vai configurar e rodar nosso servidor.
const app = express();

// 3. Definindo a Porta
// O servidor precisa "escutar" em uma porta de rede. Pense nas portas como os
// diferentes canais de uma TV. A porta 3000 é comumente usada para desenvolvimento.
const PORT = 3000;

// 4. Criando uma Rota de Teste
// Uma "rota" é um endereço que nosso servidor responde. Aqui, estamos dizendo:
// "Quando alguém acessar o endereço principal ('/') do meu servidor,
// usando o método GET, responda com a mensagem 'Nexus Logístico API está no ar!'".
app.get('/', (req, res) => {
  res.send('Nexus Logístico API está no ar!');
});

// 5. Iniciando o Servidor
// Este comando efetivamente "liga" o nosso servidor. Ele fica escutando
// na porta que definimos e, quando terminar de ligar, executa a função
// que exibe uma mensagem no console.
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});