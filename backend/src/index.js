require('dotenv/config');

const server = require('./server');

server.listen(process.env.APP_PORT, () => {
    console.log(`Escutando na porta ${process.env.APP_PORT}`)
})