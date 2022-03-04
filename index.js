const tmi = require('tmi.js');

//config options
const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        //#region
        password: process.env.OAUTH_TOKEN
        //#endregion
    },
    channels: [
        process.env.CHANNEL_NAME
    ]
};

// New client