// Import ProductTag model
const { ProductTag } = require('../models');

// Array containing product-tag association data
const productTagData = [
  { product_id: 1, tag_id: 6 },
  { product_id: 1, tag_id: 7 },
  { product_id: 1, tag_id: 8 },
  { product_id: 2, tag_id: 6 },
  { product_id: 3, tag_id: 1 },
  { product_id: 3, tag_id: 3 },
  { product_id: 3, tag_id: 4 },
  { product_id: 3, tag_id: 5 },
  { product_id: 4, tag_id: 1 },
  { product_id: 4, tag_id: 2 },
  { product_id: 4, tag_id: 8 },
  { product_id: 5, tag_id: 3 },
];

// Function to seed product-tag associations using bulkCreate
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

// Export the function for seeding product-tag associations
module.exports = seedProductTags;

