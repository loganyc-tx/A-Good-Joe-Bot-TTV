var STFUsound = new Howl({
  src: ['audio/STFU.mp3']
});
var ANGERsound = new Howl({
  src: ['audio/bladrunnerANGRY.mp3']
});

const commands = [
    {
      command: "help",
      condition: () => true,
      handler: async(client, channel, tag, args) => {
        client.say(channel,'Yeah, me too pal.');
        document.getElementById("testText").innerHTML = "HELP";
      },
    },
    {
      command: "commands",
      condition: () => true,
      handler: async(client, channel, tag, args) => {
        client.say(channel, '!help, !commands, !ps (playsound)');
      },
    },
    {
      command: "ps",
      condition: () => true,
      handler: async (client, channel, tag, args) => {
        console.log("playsound");
        ANGERsound.play();
        
      },
    },
  ];