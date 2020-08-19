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
    const consultar = await widePay.api('/recebimentos/cobrancas/consultar', options)

    if (consultar.sucesso) {

        console.log(consultar.cobrancas[0]['id']); // ID da cobrança
        console.log(consultar.cobrancas[0]['status']); // Status da cobrança

        console.log(consultar.cobrancas[0]); // Imprime todos os dados da cobrança

    } else {

        console.log(consultar.erro); // Erro

    }
    console.log(consultar)
})()