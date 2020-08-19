const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: ['16758','10293']
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const cancelar = await widePay.api('/recebimentos/carnes/cancelar', options)

    if (cancelar.sucesso) {
        console.log(cancelar.total); // Total de carnês afetados
    } else {
        console.log(cancelar.erro); // Erro
    }
    console.log(cancelar)
})()