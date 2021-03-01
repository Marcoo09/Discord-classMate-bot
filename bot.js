const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

let subjectsDB = {
  "IS2":[
    "Marco09"
  ],
  "Arquitectura":[
    "matiassalles99"
  ],
  "Taller de innovacion":[
    "Marco09",
    "matiassalles99",
    "dario",
  ]
};

let universitiesDB = {
  "ORT": [
    "Marco09",
    "dario",
  ],
  "FING": []
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const contentSplit = msg.content.split(' ');
    const command = contentSplit[0];

    switch(command){
            case "!help":
                var commandList = ["!subjectInfo", "!addMeToSubject", "!addSubject", "!universitiesInfo", "!addMeToUniversity", "!addUniversity", "!help"];
                var displayCommandList = "";
                commandList.forEach(command => displayCommandList += command + "\n");

                msg.reply("The available commands are: \n" + displayCommandList.toString());
            break;

            case "!subjectInfo":
                const stringToSend = Object.keys(subjectsDB).map(key => {
                  const peopleOnKey = subjectsDB[key]
                  return `\n--${key}--\n` + peopleOnKey.map(people => people)
                });
                msg.reply(stringToSend);
            break;

            case "!addMeToSubject":
              subject = contentSplit[1];

              if(subject !== undefined && Object.keys(subjectsDB).includes(subject)){
                people = subjectsDB[subject];

                if(!people.includes(msg.author.username)){
                  people.push(msg.author.username);
                  msg.reply("You've just been added to " + subject + "!, you can check by typing !subjectInfo");
                }
                else{
                  msg.reply("You are already participating in this subject");
                }
              }
              else{
                msg.reply("You must provide a valid subject");
              }
            break;

            case "!addSubject":
              subject = contentSplit[1];
              
              if(subject !== undefined ){
                currentSubjects = Object.keys(subjectsDB);

                if(!currentSubjects.includes(subject)){
                  subjectsDB[subject.toString()] = [];
                  msg.reply("You've just created " + subject + "!, you can check by typing !subjectInfo");
                }
                else{
                  msg.reply("Subject already exists");
                }
              }
              else{
                msg.reply("You must provide a valid subject name");
              }
            break;

            case "!universitiesInfo":
              const stringToSend2 = Object.keys(universitiesDB).map(key => {
                const peopleOnKey = universitiesDB[key]
                return `\n--${key}--\n` + peopleOnKey.map(people => people)
              });
              msg.reply(stringToSend2);
            break;

            case "!addMeToUniversity":
              unversity = contentSplit[1];

              if(unversity !== undefined && Object.keys(universitiesDB).includes(unversity)){
                people = universitiesDB[unversity];

                if(!people.includes(msg.author.username)){
                  people.push(msg.author.username);
                  msg.reply("You've just been added to " + unversity + "!, you can check by typing !universitiesInfo");
                }
                else{
                  msg.reply("You are already participating in this university");
                }
              }
              else{
                msg.reply("You must provide a valid university");
              }
            break;

            case "!addUniversity":
              university = contentSplit[1];
              
              if(university !== undefined ){
                currentUniversities = Object.keys(universitiesDB);

                if(!currentUniversities.includes(university)){
                  universitiesDB[university.toString()] = [];
                  msg.reply("You've just created " + university + "!, you can check by typing !universitiesInfo");
                }
                else{
                  msg.reply("University already exists");
                }
              }
              else{
                msg.reply("You must provide a valid university name");
              }
            break;
    }
});

client.login(auth.token);