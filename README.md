# concurrent-fetcher — Asynchronous API Data Aggregator

---

## 📝 Project Overview

**concurrent-fetcher** is a Node.js backend application designed for the Solulab assignment series. It demonstrates robust asynchronous API integration and data aggregation techniques. The server concurrently fetches and merges data from multiple public APIs, including:

- **GitHub API**: Search and fetch repositories
- **OpenWeatherMap API**: Retrieve weather info for repository owners' locations
- **NewsAPI**: Gather relevant news articles

All external requests leverage both **promises (`.then`/`.catch`)** and **async/await (`try`/`catch`)**—showcasing modern asynchronous programming approaches.

---

## 🎯 Features

- **Express Server** with `/aggregate/:query` and `/aggregate/promise/:query` endpoints
- **Concurrent API Calls** using `Promise.all` and `Promise.allSettled`
- **Robust Error Handling** with retries and exponential backoff
- **Unified Data Aggregation** from multiple APIs into a single JSON payload
- **Timeout Management** for gracefully handling slow responses
- **Environment Variable Management** via `.env`
- **Request Logging Middleware** for monitoring and debugging

---

## ⚙️ Tech Stack

- **Node.js** (v22.x)
- **Express** — Server & routing
- **dotenv / dotenvx** — Environment management
- **Axios** (v1.6.5) — HTTP requests
- Utility libraries as required

---

## 🗂️ Project Structure

```plaintext
concurrent-fetcher/
├── logs/
├── src/
│   ├── controllers/      # API controllers
│   ├── routes/           # Express route handlers
│   ├── services/         # Business logic layer
│   ├── utils/            # Utilities (e.g., fetchWithRetry.js)
│   └── app.js            # Express initialization
├── .env                  # Environment variables (not committed)
├── package.json
├── package-lock.json
└── server.js             # Application entry point
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suryasubharyan/concurrent-fetcher.git
cd concurrent-fetcher
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in your project root:

```
PORT=3000
GITHUB_API_KEY=your_github_api_key_here
OPENWEATHER_API_KEY=your_openweather_api_key_here
NEWS_API_KEY=your_news_api_key_here
```

---

## ▶️ Running the Application

Start the server:

```bash
node server.js
```

The server will run on the port specified in your `.env` file (**default: 3000**).

---

## 🌐 API Endpoints

- **GET `/aggregate/:query`**
- **GET `/aggregate/promise/:query`**

Both endpoints aggregate data using different async methodologies.

---

## 📢 Notes

- All API keys must be valid and set in your `.env` file.
- Logging and error handling are built-in for production-grade reliability.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue for major changes.

---

## 📄 License

This project is part of the Solulab assignment series and intended for educational purposes.

---
