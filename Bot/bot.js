const { Telegraf } = require("telegraf");
const TOKEN = "5499454279:AAHZxgS3_wBTjPvYptzne-VcUvdmD-k41LY";
const bot = new Telegraf(TOKEN);

const web_link = "https://50f0-125-212-217-233.ap.ngrok.io";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
