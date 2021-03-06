// Add all configurable settings shared between Dev and Prod here!
const baseConfig = {
    baseURL: "/",
    JWT: {
        key: "supersecretccapirest*1114",
        options: {
            expiresIn:  "10y"
        }
    },
    DB: {
        //connString: "mongodb+srv://dev_user:xaTImRSRgFDG9rAY@code-challenge-api-rest-jsa05.mongodb.net/test?retryWrites=true&w=majority",
        connString: "mongodb://mongo:27017/mongodb",
        options: { 
            autoIndex: false,
            poolSize: 100,
            bufferMaxEntries: 0,
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    }
}

module.exports = baseConfig;