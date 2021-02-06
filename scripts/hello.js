'use strict';
// Description:
//   helloと呼びかけるとhelloと返してくれるボットです。
//   また、おみくじと言うとランダムで結果が帰ってくるボットです。
// Commands:
//   hello>      - あいさつを返す
//   おみくじ	 - ['大吉', '吉', '中吉', '末吉', '凶']のいずれかを返す
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot},<@${user_id}>`);
  });
};
