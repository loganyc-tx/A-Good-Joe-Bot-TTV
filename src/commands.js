const command = [
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
        var audio = new Audio(".audio/bladerunnerANGRY.mp3");
        
      },
    },
  ];