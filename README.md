concurrent-fetcher( Asynchronous API Data Aggregator )

## Project Overview

This project is part of the Solulab assignment series.
It is a Node.js backend application demonstrating asynchronous API integration and data aggregation.
The server aggregates data from multiple public APIs, including:

* GitHub API (fetch repositories based on search queries)
* OpenWeatherMap API (weather information for repo owners' locations)
* NewsAPI (related news articles)

All API calls are handled using both **promises (.then/.catch)** and **async/await (try/catch)** to demonstrate different approaches to asynchronous programming.

---

## Features Implemented

* Express server with `/aggregate/:query && /aggregate/promise/:query` route
* Concurrent API calls using `Promise.all` and `Promise.allSettled`
* Error handling and retries with exponential backoff
* Aggregation of responses from multiple APIs into a unified JSON object
* Timeout handling to respond gracefully if APIs take too long
* Environment variable management using `.env` for API keys
* Request logging middleware for monitoring


---

## Technologies Used

* **Node.js** v22.x
* **Express** for server and routing
* **dotenv** / **dotenvx** for environment variable management
* **Axios** (v1.6.5) for HTTP requests
* Other utility libraries as required

---

## Project Structure

```
new-assign2/
│
├─logs
├─ src/
│  ├─ controllers/       # API controllers
│  ├─ routes/            # Express routes
│  ├─ services/          # Service layer for business logic
│  ├─ utils/             # Utility functions (e.g., fetchWithRetry.js)
│  └─ app.js             # Express app initialization
│
├─ .env                  # Environment variables (ignored by git)
├─ package.json           # Project dependencies
├─ package-lock.json      # Locked dependency versions
└─ server.js              # Server entry point
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/suryasubharyan/concurrent-fetcher
cd concurrent-fetcher
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your environment variables, for example:

```
PORT=3000
GITHUB_API_KEY=your_github_api_key_here
OPENWEATHER_API_KEY=your_openweather_api_key_here
NEWS_API_KEY=your_news_api_key_here
```

---

## Running the Project

```bash
node server.js
```

The server will start at the port defined in your `.env` file (default: 3000). Access the aggregation endpoint like:

```
GET /aggregate/:query
```
GET /aggregate/promise/:query
---




