const express = require("express");
const aggregateRoutes = require("./routes/aggregateRoutes");
const logger = require("./middleware/logger");

const app = express();

// Midlleware
app.use(logger);

// Routes
app.use("/aggregate", aggregateRoutes);

module.exports = app;