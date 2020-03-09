const tokenMain = require("../token");
const discord2 = require("../discord2");
// const Discord = require("discord.js");
// const client = new Discord.Client();

module.exports = {
  Query: {
    getToken: () => {
      return token;
    }
  },
  Mutation: {
    setToken: async (_, { token }) => {
      // tokenMain.add(token);
      // console.log(tokenMain, token);
      // login(token);
      await discord2.login(token);
      return;
    }
  }
};
