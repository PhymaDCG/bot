import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// List of trigger words
const triggers = {
  scalper: ["shut yo bubble gum dum dum look ahh up", "goofy lookin ahh boi", "kys"],
  wife: ["iTs fOr tHe mAsTeRseT", "alright buddy", "banned"],
  290: ["It's empty don't bother checking", "where's hawaiian shirt"]
};

// List of quotes
const quotes = [
  "Commit sewer slide.",
  "I need this for my wife.",
  "PLAYABLE",
  "It's for the wife's masterset.",
  "Is this available?",
  "Up for grabs?",
  "My wife needs that.",
  "Insert Shum crashing out over losing a 1/3 for a godpack and SIR.",
  "I wonder how many quotes I can even fit into here.",
  "Apparently Olivia is bad at pickleball.",
  "BRING BACK CENSORSHIP",
  "Scalpers gonna scalp gg",
  "FedEx sucks (looks at Sam).",
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

  const msgContent = message.content.toLowerCase();
  for (const [word, responses] of Object.entries(triggers)) {
    if (msgContent.includes(word)) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(randomResponse);
    }
  }
});

client.login(process.env.BOT_TOKEN);

