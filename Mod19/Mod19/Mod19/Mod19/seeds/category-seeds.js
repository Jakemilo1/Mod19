// Import Category model
const { Category } = require('../models');

// Array containing category data
const categoryData = [
  { category_name: 'Shirts' },
  { category_name: 'Shorts' },
  { category_name: 'Music' },
  { category_name: 'Hats' },
  { category_name: 'Shoes' },
];

// Function to seed categories using bulkCreate
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the function for seeding categories
module.exports = seedCategories;
