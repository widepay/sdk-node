const moment = require("moment");
const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    cobrancas: ['5F151D278C9DDC80', '7CF34C1FF5E842B0', '6AB79C5F626436A8']
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const montar = await widePay.api('/recebimentos/carnes/montar', options)

    if (montar.sucesso) {

        console.log(montar.id); // ID do carnê gerado
        console.log(montar.link); // Link do carnê gerado

    } else {

        console.log(montar.erro); // Erro

        if (montar.erro === 'Erro na validação dos campos.') {
            console.log(montar.validacao); // Imprime os erros de validação
        }

    }
    console.log(montar)
})()