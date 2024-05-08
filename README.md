# Weather App

Este é um aplicativo web simples que utiliza JavaScript, HTML e CSS para exibir informações meteorológicas usando a API gratuita do OpenWeather.

## Funcionalidades

- **Busca de Localização:** O usuário pode inserir o nome da cidade para buscar informações meteorológicas.
- **Exibição de Informações:** O aplicativo exibe informações como temperatura, umidade, velocidade do vento, etc.
- **Ícones de Condição:** Ícones representativos da condição do tempo são exibidos para uma melhor compreensão visual.

## Como Usar

1. Clone ou baixe este repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador da web.
3. Insira o nome da cidade desejada no campo de busca.
4. Pressione Enter ou clique no botão de busca.
5. As informações meteorológicas para a cidade serão exibidas.

## Configuração da API

Este aplicativo utiliza a API gratuita do OpenWeather para obter informações meteorológicas. Você precisará obter uma chave de API gratuita do OpenWeather para usar este aplicativo. Depois de obter a chave de API, substitua `YOUR_API_KEY` no arquivo `script.js` com sua própria chave.

```javascript
const apiKey = 'YOUR_API_KEY';