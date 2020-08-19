const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: request.body.notificacao
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const notificacao = await widePay.api('/recebimentos/carnes/notificacaor', options)

    if (notificacao.sucesso) {
        console.log(notificacao.carne['id']); // ID do carnê
        console.log(notificacao.carne['status']); // Status do carnê
        console.log(notificacao.carne); // Imprime todos os dados do carnê
    } else {
        console.log(notificacao.erro); // Erro
    }
    console.log(notificacao)
})()