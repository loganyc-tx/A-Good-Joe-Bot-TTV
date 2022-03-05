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
        irc.say(target, '!help, !commands, !ps (playsound)');
      },
    },
    {
      command: "!ps",
      condition: (tags) => {
        console.log(tags);
      },
      handler: async () => {
        const response = await fetch("1606375674646.gif")
        ANGERsound.play();
        const data = await response.json()
        gifQueue.add(data[0].url);
      },
    },
  ];