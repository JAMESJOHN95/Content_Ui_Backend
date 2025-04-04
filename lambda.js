const sls = require('serverless-http')
const { server } = require('./app')

module.exports.handler = sls(server)