const Discord = require("discord.js");
const client = new Discord.Client();

async function login(token) {
  console.log(token);
  await client
    .login(token)
    .then(async () => {
      await client.on("ready", async () => {
        console.log(client);
        return;
      });
    })
    .catch(err => {
      console.error(err);
      return err;
    });
}

async function clientRoute(req, res, next) {
  let guilds = [];
  await Promise.all(
    client.guilds.map(async g => {
      let channels = [];
      await Promise.all(
        g.channels.map(async c => {
          if (c.type === "text") {
            let chanObj = {
              name: c.name,
              id: c.id
            };
            channels.push(chanObj);
          }
        })
      );

      let guildObj = {
        name: g.name,
        id: g.id,
        icon: g.icon,
        joinedTimestamp: g.joinedTimestamp,
        channels
      };
      guilds.push(guildObj);
    })
  );

  let dms = [];
  await Promise.all(
    client.channels.map(async c => {
      if (c.type === "dm") {
        let dmObj = {
          user: {
            username: c.recipient.username,
            discriminator: c.recipient.discriminator,
            id: c.recipient.id,
            avatar: c.recipient.avatar
          },
          id: c.id
        };
        dms.push(dmObj);
      }
    })
  );

  let obj = {
    id: client.user.id,
    verified: client.user.verified,
    guilds,
    dms
  };
  return res.send(JSON.stringify(obj));
}

module.exports = {
  login,
  clientRoute
};
