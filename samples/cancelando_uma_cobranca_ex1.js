const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: '4509FBB5977E4854',
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