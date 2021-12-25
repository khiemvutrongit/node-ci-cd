const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
});

const envVars = process.env;
module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    host: envVars.HOST,
    mongoose: {
        url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
}