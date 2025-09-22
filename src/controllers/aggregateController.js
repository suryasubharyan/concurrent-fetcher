const { fetchGithubRepos } = require('../services/githubService');
const { fetchWeather } = require('../services/weatherService');
const { fetchNews } = require('../services/newsService');

// --------------------
// Async/Await version
// --------------------
async function aggregateData(req, res) {
  const query = req.params.query;

  try {
    // Fetch GitHub repos first
    const repos = await fetchGithubRepos(query);

    // Get repo owner location (fallback London)
    const topLocation = repos[0]?.ownerLocation || 'London';

    // Fetch weather + news in parallel
    const [weather, news] = await Promise.allSettled([
      fetchWeather(topLocation),
      fetchNews(query),
    ]);

    const aggregated = {
      query,
      github: repos,
      weather: weather.status === 'fulfilled' ? weather.value : { error: 'Weather not available' },
      news: news.status === 'fulfilled' ? news.value : [{ error: 'News fetch failed' }],
    };

    res.json(aggregated);
  } catch (error) {
    console.error('Aggregation error (async/await):', error.message);
    res.status(500).json({ error: 'Failed to aggregate data' });
  }
}

// --------------------
// Promise .then/.catch version
// --------------------
function aggregateDataPromise(req, res) {
  const query = req.params.query;

  fetchGithubRepos(query)
    .then((repos) => {
      const topLocation = repos[0]?.ownerLocation || 'London';

      return Promise.allSettled([fetchWeather(topLocation), fetchNews(query)])
        .then(([weather, news]) => {
          const aggregated = {
            query,
            github: repos,
            weather: weather.status === 'fulfilled' ? weather.value : { error: 'Weather not available' },
            news: news.status === 'fulfilled' ? news.value : [{ error: 'News fetch failed' }],
          };

          res.json(aggregated);
        });
    })
    .catch((error) => {
      console.error('Aggregation error (promise):', error.message);
      res.status(500).json({ error: 'Failed to aggregate data' });
    });
}

module.exports = { aggregateData, aggregateDataPromise };
