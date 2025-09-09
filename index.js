import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// List of quotes
const quotes = [
  "Commit sewer slide.",
  "I need this for my wife.",
  "FedEx sucks.",
  "HAH, GAEEEEEE",
  "An issue of one's skill.",
  "Y'all have no idea how many quotes I put in this.",
  "There's always a new one..."
];

client.on('messageCreate', (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message has an image attachment
  if (message.attachments.size > 0) {
    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    message.channel.send(randomQuote);
  }
});

client.login(process.env.BOT_TOKEN);

