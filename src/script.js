// const tmi = require('tmi.js'); doesn't work on client based js
// const commands = require('./commands')

const getChannel = (param) => {
    const url = new URL(window.location.href);
    let str = url.searchParams.get(param);
    document.getElementById("errmsg").innerHTML = str;
    return url.searchParams.get(param);
  };
const currChan = getChannel("channel");
const AUTOCMD_INTERVAL = 900000;//15 min interval

setInterval(commandReminder,AUTOCMD_INTERVAL * 2);
//config options
const opts = {
    options: {
        debug: true
    },
    identity: {
        username: "AGood_JoeBOT",
        //#region
        
        password: "oauth:n7e4a05qqtwrvjeqptkqp1davztxqw",
        //#endregion
        
    },
    channels: [
        currChan,
        
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
    
    text.innerHTML = "Loaded!";
    
  });

document.getElementById("start").addEventListener("click", start);
function start(){
    document.getElementById("errmsg").style.display = 'none';
    document.getElementById("testText").style.display = 'none';
    document.getElementById("start").style.display = 'none';
    document.getElementById("imgDisp").style.opacity = '0';
    
}


async function commandReminder(){
    client.say(currChan, "This is Joe, Penguin's very own bot. Use !commands to check how little programming he can actually do. Last update - 4/17");
}




