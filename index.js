/**
 * Gerenciador de HTTP, utilizado par ao criar o servidor.
 */
let http = require('http');
http.createServer(function(pedido, resposta) {

    console.log("URL DIGITADA:",pedido.url);
    if (pedido.url === '/') {
        resposta.end("Estou na HomePage!");
    }

    resposta.end("404: Não encontrada!");
}).listen(3000, 'localhost', function() {
    console.log('================ SERVIDOR INICIADO! ==============')
});