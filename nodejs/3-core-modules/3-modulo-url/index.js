const url = require('url')
const address = `https://www.sitequalquer.com.br/catalog?servicos=formatacao`
const parsedUrl = new url.URL(address)


console.log(parsedUrl.host); // www.sitequalquer.com.br

console.log(parsedUrl.pathname); // /catalog

console.log(parsedUrl.search); // ?servicos=formatacao

console.log(parsedUrl.searchParams); // URLSearchParams { 'servicos' => 'formatacao' }

console.log(parsedUrl.searchParams.get('servicos')); // formatacao