const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767})

client.on("ready", () => {
    console.log("PATOBOT LISTO");
 });
 
//FS

const fs = require("fs");
let { readdirSync } = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./node_modules").filter(file => file.endsWith(".js"))

for (const file of commandFiles){
  const command = require(`./node_modules/${file}`);
  client.commands.set(command.name, command);
}

//Slash Command

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    console.log(`Slash commands -${file} cargado.`)
    client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async(interaction) => {
    if(!interaction.isCommand()) return;  

    const slashcmds = client.slashcommands.get(interaction.commandName)

    if(!slashcmds) return;

    try{
      await slashcmds.run(client, interaction)
    } catch(e){
      console.error(e)
    }
})
  
client.login("Nzg4OTg4MTE0MDM5MzQxMDU2.X9rgcQ.SZNjUPwDZw3cA5nGLjuoiUQpnZQ");