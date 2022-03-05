const tmi = require('tmi.js');
var irc = require('irc');
const command = require('./commands.js')
const {Howl, Howler} = require('howler'); 
// const OBSWebSocket = require('obs-websocket-js');
// const obs =  new OBSWebSocket();


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

const gifQueue = new Queue({
    onAdd: (url) => async () => {
      const gifContainer = document.querySelector(".gif");
      gifContainer.innerHTML = `<img src="${url}" />`;
      gifContainer.style.opacity = 1;
  
      await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
  
      if (!gifQueue.isLooping) {
        gifContainer.style.opacity = 0;
      }
    },
  });


// try{
//     // obs.connect({
//     //     address: "localhost:4444",
//     //     password: user.WEBSOCK_PW,
//     // }).catch( err=> {
//     //     console.error(err.message);
//     // });
//     //console.log('Websocket connected.');
    
//     //irc.connect();
    
    
//     // Event handler registration
    
//     //irc.on('connected', onConnectedHandler);
    
//     // Connect to ttv
    
    
//     //irc.on('message', onMessageHandler);
// } catch (err){
//     console.error(err.message);
// }
// New client
var STFUsound = new Howl({
    src: ['audio/STFU.mp3']
});
var ANGERsound = new Howl({
    src: ['audio/bladrunnerANGRY.mp3']
});
var sorry4What = new Howl({
    src: ['audio/Sorry for what.mp3']
});

irc = new tmi.client(opts);
irc.connect();
client.on("message", (channel, tags, message) => {
    commands.forEach((command) => {
      if (
        message.startsWith(command.command) &&
        command.condition(tags, message)
      ) {
        command.handler(tags, message);
      }
    });
  });
   


// Called if there is a message
function onMessageHandler (target, context, msg, self){
    if(self){ return; } //ignore self

    //Remove whitespace
    const commandName = msg.trim().toLowerCase();
    var args = commandName.split(' ');
    console.log(args.toString() + ".");
    // do da command
    if (args[0] === '!help' || args[0] === '!h'){
        irc.say(target, 'Yeah, me too pal.');
        
    }else if (args[0] === '!c' || args[0] === '!commands'){
        irc.say(target, '!help, !commands, !ps (playsound)');
        
    }else if(args[0] === '!ps'){
        const gifContainer = document.querySelector(".gif");
        

        console.log('* Executed command !ps');
        if(args.length < 2){
            irc.say(target, 'Give me something to work with here. (STFU, kANGER)');
        }else if(args[1] === 'stfu'){
            STFUsound.play(); 
        }else if(args[1] === 'kANGER'){
            gifContainer.innerHTML = `<img src="./src/1606375674646.gif" />`;
            gifContainer.style.opacity = 1;
            ANGERsound.play();
        }else if(args[1] === 'sorry4what'){
            sorry4What.play();
        }else{
            irc.say(target, 'Not a valid playsound. (STFU, kANGER, sorry4what)');
        }

        await new Promise((resolve) => setTimeout(resolve, 3 * 1000)); //3 sec
        
    
    }else{
        console.log('* Unknown command ${commandName}');
    }
}

// Called on connect
function onConnectedHandler (addr, port){
    console.log(process.env.CHANNEL_NAME);
    console.log('* Successfuly connection to ${addr}:${port}');
}






