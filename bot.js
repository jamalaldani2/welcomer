const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'chat');
 
  if (!channel) return;

  channel.send(`Welcome to AG1:gift_heart::leaves:, ${member}`);
});



client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setTitle(" 😃 عضو جديد دخل السيرفر")
  .setColor("RANDOM")
  .addField("اسم العضو",`${member}`)
  .addField("ايدي العضو",`${member.id}`)
  .addField("رقم العضو",`${member.guild.memberCount}`)
  .setThumbnail("http://www.ymcaswkansas.org/sites/ymcaswkansas.org/files/civicrm/friend.png")
  var channel =member.guild.channels.find('name', 'welcom')
if (!channel) return;
      channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
  var embed = new Discord.RichEmbed()
  .setTitle("عضو غادر السيرفر")
  .setColor("RANDOM")
  .addField("اسم العضو",`${member}`)
  .addField("ايدي العضو",`${member.id}`)
  .addField("تبقى",`${member.guild.memberCount}`)
  .setThumbnail("https://cdn.onlinewebfonts.com/svg/img_948.png")
  var channel =member.guild.channels.find('name', 'welcom')
  if (!channel) return;
        channel.send({embed : embed});
  });
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
