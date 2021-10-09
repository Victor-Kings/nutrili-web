const withImages = require('next-images')
module.exports = withImages()
module.exports.env = {
    AUTH_AOBARIZATION: process.env.AUTH_AOBARIZATION,
    AUTH_AUTHORIZATION: process.env.AUTH_AUTHORIZATION,
    AUTH_GRANT_TYPE: process.env.AUTH_GRANT_TYPE,
    AUTH_PASSWORD: process.env.AUTH_PASSWORD,
    AUTH_GRANT_TYPE_REFRESH: process.env.AUTH_GRANT_TYPE_REFRESH,
    URL_IA_API: process.env.URL_IA_API,
    URL_BACKEND: process.env.URL_BACKEND
}