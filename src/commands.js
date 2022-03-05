const commands = [
    {
      command: "!help",
      condition: () => true,
      handler: async() => {
        return irc.say(target, 'Yeah, me too pal.');
      },
    },
    {
      command: "!commands",
      condition: () => true,
      handler: async() => {
        return irc.say(target, '!help, !commands, !ps (playsound)');
      },
    },
    {
      command: "!ps",
      condition: (tags) => {
        console.log(tags);
      },
      handler: async () => {
        
        gifQueue.add(url);
      },
    },
  ];