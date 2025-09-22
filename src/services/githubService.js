// src/services/githubService.js
const fetchWithRetry = require('../utils/fetchWithRetry'); // import the retry helper

const fetchGithubRepos = async (query) => {
  const url = `https://api.github.com/search/repositories?q=${query}`;

  // Use fetchWithRetry with default retries and 5s timeout
  const response = await fetchWithRetry(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "node.js",
    },
  });

  return response.data.items.map((repo) => ({
    name: repo.full_name,
    url: repo.html_url, // ✅ use html_url instead of url
    stars: repo.stargazers_count,
    ownerLocation: repo.owner.location || null, // optional: later for weather
  }));
};

module.exports = { fetchGithubRepos };
