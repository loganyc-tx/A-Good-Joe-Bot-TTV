
const commands = [
    {
      command: "!help",
      condition: () => true,
      handler: async() => {
        client.say(target, 'Yeah, me too pal.');
      },
    },
    {
      command: "!commands",
      condition: () => true,
      handler: async() => {
        client.say(target, '!help, !commands, !ps (playsound)');
      },
    },
    {
      command: "!ps",
      condition: () => true,
      handler: async () => {
        console.log("playsound");
        //ANGERsound.play();
        //gifQueue.add("https://files.catbox.moe/3jvet4.gif");
      },
    },
  ];