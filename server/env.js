const dotenv = require('dotenv')
dotenv.config()

const {
    APP_PORT,
    APP_NAME,
    SHARED_SECRET,
    REFRESH_SECRET,
    NODE_ENV,
    MONGO_HOST, 
    MONGO_PORT, 
    MONGO_USER, 
    MONGO_PASS,
} = process.env

let MONGO_URI = (env = NODE_ENV) => {
    let URI = ''
    if (env === 'development') {
        URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@mongo:27017/${APP_NAME}?authSource=admin`
    } else {   
        URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${APP_NAME}?authSource=admin`
    }
    return URI
}


module.exports = {
    APP_PORT,
    SHARED_SECRET,
    REFRESH_SECRET,
    MONGO_URI,
    APP_NAME,
}