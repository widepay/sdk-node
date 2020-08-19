const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: '16758'
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const consultar = await widePay.api('/recebimentos/carnes/consultar', options)

    if (consultar.sucesso) {
        console.log(consultar.carnes[0]['id']); // ID do carnê
        console.log(consultar.carnes[0]['status']); // Status do carnê
        console.log(consultar.carnes[0]); // Imprime todos os dados do carnê
    } else {
        console.log(consultar.erro); // Erro
    }
    console.log(consultar)
})()