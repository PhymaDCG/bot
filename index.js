import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  // If the message has an attachment (like an image)
  if (message.attachments.size > 0) {
    message.channel.send("I need this for my wife.");
  }
});

client.login(process.env.BOT_TOKEN);
