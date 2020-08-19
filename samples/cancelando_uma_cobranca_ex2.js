const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: ['6F764DBF97746073', '98710E1F977E6077'],
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const cancelar = await widePay.api('/recebimentos/cobrancas/cancelar', options)

    if (cancelar.sucesso) {
        console.log(cancelar.total); // Total de cobranças afetadas
    } else {
        console.log(cancelar.erro); // Erro
    }
    console.log(cancelar)
})()