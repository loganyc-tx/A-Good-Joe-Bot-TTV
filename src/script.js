const tmi = require('tmi.js');
const command = require('./commands.js')

//config options
const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        //#region
        password: process.env.OAUTH_TOKEN
        //#endregion
    },
    channels: [
        //process.env.CHANNEL_NAME
        getChannel("channel")
    ],
    connection: {
        secure: true,
    },
};


const getChannel = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
  };
const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);


client.connect();

function onMessageHandler (channel, tag, msg, self) {
    if (self) { return; } // Ignore messages from the bot
    commands.forEach((command) => {
        if (
            message.startsWith(command.command) &&
            command.condition(tag, msg)
        ) {
            client.say("doing command");
            command.handler(tag, msg);
        }
      });
}  

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    text = document.getElementById("testText");
    text.innerHTML = "yoshi";
  }



