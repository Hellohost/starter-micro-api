// 

// const { ID_GROUP, BOT_TOKEN } = require('dotenv').config().parsed
const cron = require("node-cron");
const { Telegraf, Markup, Extra } = require("telegraf");
const axios = require("axios");
//1. Import coingecko-api
const CoinGecko = require("coingecko-api");
const smartAssToken = "1773144527:AAHgscv5rX8DniOF5yR12EIc25QZaX6yFf8";
const navigine = "1583989120:AAHJ9r9q2RC2IYzVHM8Mwaed73sT4WIJalU";
const testBot = "1727833802:AAE_lCkJSJiQgPGOIXLQozijpY1P1wux4QQ";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
let priceOfTicket = 0;
//3. Make` calls
var getCryptoEx = async () => {
  const info = {};
  let data = await CoinGeckoClient.simple.price({
    ids: ["bitcoin", "ethereum"],
    vs_currencies: ["eur", "usd", "rub"],
  });
  JSON.stringify(data);
  console.log("11111111111111111111 working");
  info.bitcoin = data.data.bitcoin;
  info.bitcoin.usd = data.data.bitcoin.usd;
  info.bitcoin.eur = data.data.bitcoin.eur;
  info.bitcoin.rub = data.data.bitcoin.rub;
  info.ethereum = data.data.ethereum;
  info.ethereum.usd = data.data.ethereum.usd;
  info.ethereum.eur = data.data.ethereum.eur;
  info.ethereum.rub = data.data.ethereum.rub;
  const response = `Bitcoin: usd-${info.bitcoin.usd}, eur-${info.bitcoin.eur}, rub-${info.bitcoin.rub} \nEthereum: usd-${info.ethereum.usd}, eur-${info.ethereum.eur}, rub-${info.ethereum.rub} \n
  Лишь утратив всё до конца, мы обретаем свободу.`;
  return response;
};
const c = {};
var getStatsRpl = async () => {
  try {
    const a = await axios.get(
      "https://v3.football.api-sports.io/standings?league=235&season=2021",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-apisports-key": "032157c2baab48eb520ead92437ed3f6",
        },
      }
    );
    const table = {};
    a.data.response[0].league.standings[0].map(
      (i) => (table[i.team.name] = i.points)
    );
    c.abc = a.data.results;
    function objToString(table) {
      var str = "";
      for (var p in table) {
        if (table.hasOwnProperty(p)) {
          str += p + "  :  " + table[p] + "\n";
        }
      }
      return str;
    }

    return objToString(table);
  } catch (e) {
    console.log(e);
  }
};
var getStatsEpl = async () => {
  try {
    const a = await axios.get(
      "https://v3.football.api-sports.io/standings?league=39&season=2021",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-apisports-key": "032157c2baab48eb520ead92437ed3f6",
        },
      }
    );
    const table = {};
    a.data.response[0].league.standings[0].map(
      (i) => (table[i.team.name] = i.points)
    );
    c.abc = a.data.results;
    function objToString(table) {
      var str = "";
      for (var p in table) {
        if (table.hasOwnProperty(p)) {
          str += p + "  :  " + table[p] + "\n";
        }
      }
      return str;
    }

    return objToString(table);
  } catch (e) {
    console.log(e);
  }
};
var getTests = async () => {
  try {
    const a = await axios.get("https://v3.football.api-sports.io/leagues", {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": "032157c2baab48eb520ead92437ed3f6",
      },
    });
    const table = {};
    // const table = JSON.stringify(resp.data.response[0].league.standings.map((i)=> i.map((team)=> team)))
    // const table = JSON.stringify(resp.data.response[0].league.standings.map((i)=> i[0].team))
    a.data.response.filter((i) => i.country.name === "Russia");
    console.log(a.data.response.filter((i) => i.country.name === "Russia"));
    return 1;
  } catch (e) {
    console.log(e);
  }
};
var getTickets = async () => {
  try {
    const tickets = await axios.get(
      "https://www.ryanair.com/api/booking/v4/es-es/availability?ADT=1&CHD=0&DateIn=&DateOut=2022-09-28&Destination=HEL&Disc=0&INF=0&Origin=BAR&TEEN=0&promoCode=&IncludeConnectingFlights=false&OriginIsMac=true&FlexDaysBeforeOut=2&FlexDaysOut=2&ToUs=AGREED&RoundTrip=false&ChangeFlight=undefined",
      {}
    );
    const table = tickets.data.trips[0].dates;
    let price;
    table.forEach((element) => {
      if (element.flights.length !== 0) {
        console.log(element.flights[0].regularFare.fares[0].publishedFare);
        price = element.flights[0].regularFare.fares[0].publishedFare;
        // if(price < 60){
        //   bot.telegram.sendMessage(pot, price);
        // }
      }
    });
    return price;
  } catch (e) {
    console.log(e);
  }
};
const test = async () => await (() => 123);
const bot = new Telegraf(testBot);
const pot = -1001274650249;
console.log(bot ? "Startingggg" : "Bot failed init");

var getTickets = async () => {
  try {
    const tickets = await axios.get(
      "https://www.ryanair.com/api/booking/v4/es-es/availability?ADT=1&CHD=0&DateIn=&DateOut=2022-09-28&Destination=HEL&Disc=0&INF=0&Origin=BAR&TEEN=0&promoCode=&IncludeConnectingFlights=false&OriginIsMac=true&FlexDaysBeforeOut=2&FlexDaysOut=2&ToUs=AGREED&RoundTrip=false&ChangeFlight=undefined",
      {}
    );
    const table = tickets.data.trips[0].dates;
    let price;
    table.forEach((element) => {
      if (element.flights.length !== 0) {
        console.log(element.flights[0].regularFare.fares[0].publishedFare);
        console.log('getTickets');
        price = element.flights[0].regularFare.fares[0].publishedFare;
        if(price < 60){
          bot.telegram.sendMessage(pot, price);
        }
      }
    });
    return price;
  } catch (e) {
    console.log(e);
  }
};


// setInterval(() => {
//   getTickets(), 3600000;
// });
setInterval(getTickets, 3600000);
const timezoneCron = {
  scheduled: true,
  timezone: "Europe/Moscow",
};

// cron.schedule(
//   "00 56 10 * * Monday-Friday",
//   (ctx) => {
//     bot.telegram.sendMessage(pot, "пора жрать говно");
//   },
//   timezoneCron
// );

cron.schedule(
  "30 38 21 * * 6",
  async (ctx) => {
    bot.telegram.sendMessage(pot, await getCryptoEx());
  },
  timezoneCron
);
bot.start((ctx) => {
  return ctx.reply(
    "Custom buttons keyboard",
    Markup.keyboard([
      ["🎄 ротор", "🚀 CRYPTO"], // Row1 with 2 buttons
      ["🏆 EPL", "🏆 RPL"], // Row2 with 2 buttons
    ])
  );
});

bot.hears(
  "🎄 ротор",
  async (ctx) => await ctx.reply("Сосали, сосете и будете сосать...")
);
bot.hears("🚀 CRYPTO", async (ctx) => await ctx.reply(await getCryptoEx()));
bot.hears("🏆 RPL", async (ctx) => await ctx.reply(await getStatsRpl()));
bot.hears("🏆 EPL", async (ctx) => await ctx.reply(await getTickets()));

bot.hears("ротор", async (ctx) => {
  await ctx.reply("Сосали, сосете и будете сосать...");
});
bot.command("rpl", async (ctx) => {
  await ctx.reply(await getStatsRpl());
});
bot.command("epl", async (ctx) => {
  await ctx.reply(await getTickets());
});
bot.command("crypto", async (ctx) => {
  await ctx.reply(await getCryptoEx());
});

bot.start(async (ctx, message) => {
  console.log(ctx.getChatMember);
  await ctx.reply(await getCryptoEx());
});
bot.launch();
