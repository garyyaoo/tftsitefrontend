// const fetch = require('node-fetch');

// const riotToken = "RGAPI-f58b1c86-1c48-4895-9533-5fb0a1245b91";

// const getChallenger = async (riotToken) => {
//     const host = "https://na1.api.riotgames.com";
//     const request = "/tft/league/v1/challenger";

//     const headers = {
//         "X-Riot-Token": riotToken,
//     }
//     let players;
//     try {
//         var response = await fetch(host + request, { method: 'get', headers});
//         var json = await response.json();

//         players = json.entries;

//         let puuidSet


//     } catch (err) {

//     }
//     return;
// }
// let players= [];
// let playersMap = new Map();
// players.forEach(async (player, idx) => {
//     let requestUrl = "https://na1.api.riotgames.com" + "/tft/summoner/v1/summoners/" + player.summonerId;
//     let response = await fetch(requestUrl, { method: 'get', headers: { "X-Riot-Token": riotToken }});
//     let json = await response.json();
//     playersMap.set(player.summonerName, json)
// })

// function getSummonerIDFromPlayers(players) {
//     var count = 0;
//     players.forEach((player ,idx) => {
//         if (playersMap.get(player.summonerName).id !== undefined) {

//         } else {
//             count++;
//             setTimeout(
//                 async v => {
//                     let requestUrl = "https://na1.api.riotgames.com" + "/tft/summoner/v1/summoners/" + player.summonerId;
//                     let response = await fetch(requestUrl, { method: 'get', headers: { "X-Riot-Token": riotToken }});
//                     let json = await response.json();
//                     console.log(json);
//                     playersMap.set(player.summonerName, json)
//                 }
//                 , Math.floor(count/20)*2000,
//         )}
//     })
// }
