const Discord = require("discord.js")

const TOKEN = 'OTc0NDc4NDMwMjg2NTI4NTIz.GBaX3r.izweyIKZk7sNtmH9AGG5iPRyNONAbdR_CKN450'
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!hello"){
        message.reply("Hello, my name is {`Basic Cat`} and i'm a basic bot writtin in {`Discord.js}`")
    }
})

client.login(process.env.TOKEN)