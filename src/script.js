// const tmi = require('tmi.js'); doesn't work on client based js
// const commands = require('./commands')

const getChannel = (param) => {
    const url = new URL(window.location.href);
    let str = url.searchParams.get(param);
    document.getElementById("errmsg").innerHTML = str;
    return url.searchParams.get(param);
  };

//config options
const opts = {
    options: {
        debug: true
    },
    identity: {
        username: process.env.BOT_USERNAME || "AGood_JoeBOT",
        //#region
        
        password: process.env.OAUTH_TOKEN,
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



  
const client = new tmi.client(opts);



try{
    document.getElementById("errmsg").innerHTML = "attempting connect";
    client.connect();
    document.getElementById("errmsg").innerHTML = "Connect function ran.";
}catch (err){
    document.getElementById("errmsg").innerHTML = err;
}



client.on('message',  (channel, tag, msg, self) => {
    if (self || !msg.startsWith('!')) { return; } // Ignore messages from the bot
    const args = msg.slice(1).split(' ');
	const inCom = args.shift().toLowerCase();
    console.log(args);
    console.log(inCom);
    commands.forEach((command) => {     
        console.log(command.command);
        if (
            (inCom == command.command) &&
            command.condition(tag, args)
        ) {
            console.log("doing command");
            command.handler(client, channel, tag, args);
        }
      });
}  );



// Called every time the bot connects to Twitch chat
client.on('connected', (addr, port) => {
    //console.log(`* Connected to ${addr}:${port}`);
    text = document.getElementById("testText");
    str = "bbbbbfd";
    b = text.innerHTML + str;
    text.innerHTML = b;
    document.getElementById("img").innerHTML = `<img src="./src/kANGER.gif" />`;
  });


