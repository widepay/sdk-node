const https = require('https');
const url = require('url');

class WidePay {
    constructor(carteira, token, api_type = 'NODEJS') {
        this.api_type = api_type
        this.autenticacao = {
            carteira,
            token
        };
        this.requisicoes = []
    }
    api(local, parametros = {}) {
        return new Promise( (resolve, reject) => {
            let requisicao;
            if (!this.autenticacao.carteira || !this.autenticacao.token) {
                requisicao = {
                    'success': false,
                    'error': 'É necessário informar a carteira e o token para efetuar a autenticação.'
                };
                this.requisicoes.push(requisicao)
                resolve(this.requisicoes.pop());
            } else {
                const data = JSON.stringify(parametros);
                const urlPath = url.resolve('/v1/', local);
                const options = {
                    hostname: 'api.widepay.com',
                    port: 443,
                    path: `/v1${urlPath}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "WP-API": this.api_type,
                        "Authorization": "Basic " + new Buffer.from(this.autenticacao.carteira + ":" + this.autenticacao.token).toString('base64')
                    },
                };
                const req = https.request(options,  (res) => {
                    res.setEncoding('utf8');
                    res.on('data',  (response) => {
                        try {
                            requisicao = JSON.parse(response)
                        } catch (e) {
                            requisicao = {
                                'sucesso': false,
                                'erro': 'Não foi possível tratar o retorno.',
                                'success': false,
                                'error': 'Não foi possível tratar o retorno.',
                            };
                        }
                        this.requisicoes.push(requisicao);
                        resolve(this.requisicoes.pop());
                    });
                });
                req.on('error', (error) => {
                    requisicao = {
                        'sucesso': false,
                        'erro': 'Sem comunicação com o servidor.',
                        'success': false,
                        'error': 'Sem comunicação com o servidor.',
                    };
                    this.requisicoes.push(requisicao);
                    reject(this.requisicoes.pop());
                });
                req.write(data);
                req.end();
            }
        });
    }
}
module.exports = WidePay