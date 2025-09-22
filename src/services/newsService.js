const fetchWithRetry = require('../utils/fetchWithRetry');

async function fetchNews(query){
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${process.env.NEWSAPI_KEY}&pageSize=5`;
    try {
        const response = await fetchWithRetry(url);
        return response.data.articles.map(article => ({
            title: article.title,
            source: article.source.name,
            url: article.url,
        }));
    } catch {
        return [{ error: 'News data not available' }];
    }
    
}

module.exports = { fetchNews };