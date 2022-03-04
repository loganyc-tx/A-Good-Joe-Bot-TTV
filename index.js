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
const client = new tmi.client(opts);

// Event handler registration
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to ttv
client.connect();

// Called if there is a message
function onMessageHandler (target, context, msg, self){
    if(self){ return; } //ignore self

    //Remove whitespace
    const commandName = msg.trim().toLowerCase();

    // do da command
    if (commandName === '!help'){
        client.say(target, 'Yeah, me too pal.');
        console.log('* Executed command ${commandName}');
    }else{
        console.log('* Unknown command ${commandName}');
    }
}

// Called on connect
function onConnectedHandler (addr, port){
    console.log('Successfuly connection to $(addr):$(port)');
}