import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = `?client_id=${id}&client_secret=${sec}`;

async function getProfile (username) {
  let profile = await axios.get(`https://api.github.com/users/${username}${params}`);
  return profile.data;
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}

function getStarCount (repos) {
  return repos.data.reduce((count, {stargazers_count}) => count + stargazers_count, 0);
}

function calculateScore ({followers}, repos) {
  return (followers * 3) + getStarCount(repos);
}

function handleError (error) {
  console.warn(error);
  return null;
}

async function getUserData (player) {
  const [ profile, repos ] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ])

  return {
      profile,
      score: calculateScore(profile, repos)
    }
}

function sortPlayers (players) {
  return players.sort((a,b) => b.score - a.score);
}

// module.exports = {
//   battle (players) {
//     return Promise.all(players.map(getUserData))
//       .then(sortPlayers)
//       .catch(handleError);
//   },
//   fetchPopularRepos (language) {
//     const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

//     return axios.get(encodedURI)
//       .then(({data}) => data.items);
//   }
// };


export async function battle(players) {
  let result = await Promise.all(players.map(getUserData)).catch(handleError);

  return result === null
    ? results
    : sortPlayers(results);
}

export async function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  let repos = await axios.get(encodedURI);

  return repos.data.items;
}