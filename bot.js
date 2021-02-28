const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

const peopleOnMate = {
  "ID2":[
    "Matías",
    "Darío"
  ],
  "Arquitectura":[
    "Marco"
  ],
  "Taller de innovacion":[
    "Marco",
    "Matías"
  ]
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.substring(0, 1) == '!') {
    const command = msg.content.slice(1);
    switch(command){
            // !help
            case "help":
                var display_Command_List = ["!addMeTo", "!info ","!help"];

                msg.reply(
                 "The list of commands is: " + display_Command_List.toString()
                );

            break;

            case "info":
                const stringToSend = Object.keys(peopleOnMate).map(key => {
                  const peopleOnKey = peopleOnMate[key]
                  return `\n${key}\n` + peopleOnKey.map(people => people)
                })
                msg.reply(
                  stringToSend
                )
            break
            case "addMeTo":

              msg.reply(
                msg.author.username
               );
            break
    }

  }
});

client.login(auth.token);