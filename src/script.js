const tmi = require('tmi.js');
const command = require('./commands.js')

//config options
const opts = {
    options: {
        debug: true
    },
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
        reconnect: true
    },
};


const getChannel = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
  };
  
const client = new tmi.client(opts);



try{
    client.connect();
}catch (err){
    document.getElementById("errmsg").innerHTML = err;
}




client.on('message',  (channel, tag, msg, self) => {
    if (self || !message.startsWith('!')) { return; } // Ignore messages from the bot
    const args = message.slice(1).split(' ');
	const inCom = args.shift().toLowerCase();
    commands.forEach((command) => {
        if (
            inCom.startsWith(command.command) &&
            command.condition(tag, args)
        ) {
            client.say("doing command");
            command.handler(tag, args);
        }
      });
}  );



// Called every time the bot connects to Twitch chat
client.on('connected', (addr, port) => {
    //console.log(`* Connected to ${addr}:${port}`);
    
  });




