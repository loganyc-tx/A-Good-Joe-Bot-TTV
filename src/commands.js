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
        audio = document.getElementById("sound");
        if(args.length == 0){
          client.say(channel, 'Playsounds are - kanger, stfu, sorry4what');
        }else if(args[0].toLowerCase() == "kanger"){
          audio.setAttribute("src", "audio/bladerunnerANGRY.mp3");
          audio.setAttribute("muted", "false");
          audio.play();
        }else if(args[0].toLowerCase() == "stfu"){
          audio.setAttribute("src", "audio/STFU.mp3");
          audio.setAttribute("muted", "false");
          audio.play();
        }else if(args[0].toLowerCase() == "sorry4what"){
          audio.setAttribute("src", "audio/Sorry for what.mp3");
          audio.setAttribute("muted", "false");
          audio.play();
        }else{
          client.say(channel, "I don't know that one. Playsounds are - kanger, stfu, sorry4what");
        }
        
      },
    },
  ];