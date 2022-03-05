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
      condition: () => true,
      handler: async () => {
        const response = await fetch("https://inspirobot.me/api?generate=true");
        const url = await response.text();
        gifQueue.add(url);
      },
    },
    {
      command: "!stoppls",
      condition: (tags, message) => tags.badges.broadcaster || tags.mod,
      handler: () => {
        gifQueue.clear();
        gifQueue.pause(PAUSE_DURATION);
      },
    },
  ];