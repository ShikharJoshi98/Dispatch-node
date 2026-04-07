const http = require('http');
const app = require('./app');
const { serverConfig } = require('./config');

async function startServer() {

    const server = http.createServer(app);

    server.listen(serverConfig.PORT, () => {
        console.log(`Server is listening at port ${serverConfig.PORT}`);
    })
}

startServer()
    .catch(err => {
        console.error('Error while starting the server', err);
        process.exit(1);
    });