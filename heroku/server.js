'use strict';

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const forceSsl = require('force-ssl-heroku');

// Create the Express server and register the middlewares above.
const app = express();

// Some basic security protections.
app.use(helmet());

// Make Heroku 301 redirect to HTTPS if we're called with only HTTP.
app.use(forceSsl);

// HTTP basic authorization while the app is under development. Not a real
// User account implementation - that will come from Hybris.
// app.use(basicAuthGuard);

// Serve the statically-built application output.
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// For any URL that doesn't actively match a path, serve up index.html. This
// is how deep-linking to SPA sub routes works.
app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));

// Heroku sets a PORT environment variable that it expects the origin server
// to run on.
const port = process.env.PORT || 3000;

// Start up the server.
app.listen(port, err => {
  if (err) {
    console.error('Failed to start up:', err.stack);
    throw err;
  }

  console.log(`API Server listening on port ${port}`);
});
