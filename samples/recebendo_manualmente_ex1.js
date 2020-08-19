const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: '879831BF977E6369',
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const manual = await widePay.api('/recebimentos/cobrancas/manual', options)

    if (manual.sucesso) {
        console.log(manual.total); // Total de cobranças afetadas
    } else {
        console.log(manual.erro); // Erro
    }
    console.log(manual)
})()