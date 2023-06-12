// Import required modules
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Define routes
router.use('/categories', categoryRoutes); // Route for category operations
router.use('/products', productRoutes);    // Route for product operations
router.use('/tags', tagRoutes);            // Route for tag operations

// Export the router
module.exports = router;
