// Load in Express framework
const express = require(`express`);

// Load in our controller/action instances
const planetCtlr = require(`../controllers/planet.js`);
const { checkAcceptHeader, uploadImage } = require("../utils/middleware.js");

// Create a new Router instance and call it "router"
const router = new express.Router();

// RESTful resource mappings
router.get(`/`, checkAcceptHeader, planetCtlr.index);
router.get('/create', planetCtlr.form);
router.post(`/`, checkAcceptHeader, uploadImage, planetCtlr.create);
router.get(`/:id`, checkAcceptHeader, planetCtlr.show);
router.get('/:id/edit', planetCtlr.form);
router.put(`/:id`, checkAcceptHeader, uploadImage, planetCtlr.update);
router.delete(`/:id`, checkAcceptHeader, planetCtlr.remove);

// Export "router"
module.exports = router;
