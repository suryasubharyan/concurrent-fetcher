const fs = require('fs');
const path = require('path');

// Path for log folder & file
const logDir = path.join(__dirname, '../../logs');
const logFilePath = path.join(logDir, 'requests.log');

// Ensure logs folder exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = (req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;

  // Log to console
  console.log(logEntry.trim());

  // Append to file
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Failed to write log:', err);
  });

  next();
};

module.exports = logger;
