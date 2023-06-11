// Import necessary modules
const express = require('express');
const apiRoutes = require('./api');

// Create a router
const router = express.Router();

// API routes
router.use('/api', apiRoutes);

// Catch-all for any request not handled by above routes
router.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

// Export the router
module.exports = router;
