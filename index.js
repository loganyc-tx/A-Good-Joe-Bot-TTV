const tmi = require('tmi.js');
var irc = require('irc'),
    user = require("./privateVars.json")
const {Howl, Howler} = require('howler'); 

//config options
const opts = {
    identity: {
        username: user.BOT_USERNAME,
        //#region
        password: user.OAUTH_TOKEN
        //#endregion
    },
    channels: [
        user.CHANNEL_NAME
    ]
};

var STFUsound = new Howl({
    src: ['audio/STFU.mp3']
});
var ANGERsound = new Howl({
    src: ['audio/bladrunnerANGRY.mp3']
});


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
    var args = commandName.split(' ');
    console.log(args.toString() + ".");
    // do da command
    if (args[0] === '!help'){
        client.say(target, 'Yeah, me too pal.');
        
    }else if(args[0] === '!ps'){
        console.log('* Executed command !ps');
        if(args.length < 2){
            client.say(target, 'Give me something to work with here. (STFU, AGH)');
        }else if(args[1] === 'stfu'){
            STFUsound.play(); 
        }else if(args[1] === 'agh'){
            ANGERsound.play();
        }else{
            client.say(target, 'Not a valid playsound. (STFU, AGH)');
        }
    
    }else{
        console.log('* Unknown command ${commandName}');
    }
}

// Called on connect
function onConnectedHandler (addr, port){
    console.log(user.CHANNEL_NAME);
    console.log('* Successfuly connection to ${addr}:${port}');
}