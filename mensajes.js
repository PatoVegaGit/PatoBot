//Actividad

client.user.activity("PatoVega's code", { type: "WATCHING" })

//Mensajes de PatoBot 

const PREFIX = "-";

if(message.content.startsWith("Hola PatoBot")) 
   message.channel.send("Hola " + "<@" + message.author.id + ">");

if(message.content.startsWith("Wenomechainsama")) 
   message.channel.send("Tumajarbisaun");

if(message.content.startsWith("Adios PatoBot")) 
    message.channel.send(" Hasta luego " + "<@" + message.author.id + ">");

if(message.content.startsWith("hola patobot")) 
    message.channel.send(" Hola " + "<@" + message.author.id + ">");

if(message.content.startsWith("adios patobot")) 
    message.channel.send(" Hasta luego " + "<@" + message.author.id + ">");