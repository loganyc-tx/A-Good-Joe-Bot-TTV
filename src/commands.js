var getImg = document.getElementById("imgDisp");

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
        client.say(channel, '!help, !commands, !ps');
      },
    },
    {
      command: "ps",
      condition: () => true,
      handler: async (client, channel, tag, args) => {
        console.log("playsound");
        audio = document.getElementById("sound");
        if(args.length == 0){
          client.say(channel, 'Playsounds are - kanger, stfu, sorry4what, collegeboy, mmmmh, jabroni, gymboss, itshouldbeme');
        }else{
          try {
            console.log("playing sound");
            const audiosrc = "audio/" + args[0] + ".mp3";
            audio.setAttribute("src", audiosrc);
            audio.setAttribute("muted", "false");
            
            getImg.src = "./src/kANGER.gif";
            getImg.classList.add('fadeInOut');
            
            audio.play();      
          } catch (error) {
            client.say(channel, "I don't know that one. Playsounds are - kanger, stfu, sorry4what, collegeboy, mmmmh, jabroni, gymboss, itshouldbeme");
          }
          
        }
      },
    },
  ];


  getImg.addEventListener("animationend", function(){
    getImg.classList.remove('fadeInOut');
  })