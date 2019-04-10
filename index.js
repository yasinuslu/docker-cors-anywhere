var cors_proxy = require('cors-anywhere');

const HOST = '0.0.0.0';
const PORT = 80;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    httpProxyOptions: { xfwd: false }
}).listen(PORT, HOST, function() {
    console.log('Running CORS Anywhere on ' + HOST + ':' + PORT);
});