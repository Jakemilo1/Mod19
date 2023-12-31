// Importing required modules and models
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Endpoint `/api/products`

// GET all products with associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        { model: Category }, 
        { model: Tag, attributes: ['tag_name'], through: ProductTag, as: 'productTag_products' }
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a product by its ID along with associated Category and Tag data
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category }, 
        { model: Tag, attributes: ['tag_name'], through: ProductTag, as: 'productTag_products' }
      ],
    });

    if (!productData) {
      return res.status(404).json({ message: 'No Product found with this ID' });
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new product and create pairings in the ProductTag model if product tags are provided
router.post('/', (req, res) => {
  // req.body is expected to be like { product_name: "Basketball", price: 200.00, stock: 3, tagIds: [1, 2, 3, 4] }
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return { product_id: product.id, tag_id };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => res.status(400).json(err));
});

// PUT to update a product and its associated tags
router.put('/:id', (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then(() => ProductTag.findAll({ where: { product_id: req.params.id } }))
    .then((productTags) => {
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({ product_id: req.params.id, tag_id }));
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => res.json(err));
});

// DELETE a product by its ID
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({ where: { id: req.params.id } });
    if (!productData) {
      return res.status(404).json({message: 'No Product found with this ID'});
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
