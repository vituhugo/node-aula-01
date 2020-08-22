/**
 * Gerenciador de HTTP, utilizado par ao criar o servidor.
 */
let http = require('http');
const validator = require('validador-cpf-lib');

http.createServer(function(pedido, resposta) {
    let url = pedido.url;
    let cpf = url.replace("/", "");
    console.log("URL DO NAVEGADOR:", url);

    console.log(validator);
    console.log("RETORNO VALIDADOR: ", validator.cpfValidator(cpf));

    if (validator.cpfValidator(cpf) === true) {
        resposta.end("É válido");
    } else {
        resposta.end("É invalido");
    }

}).listen(3000, 'localhost', function() {
    console.log('================ SERVIDOR INICIADO! ==============')
});