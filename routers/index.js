// Load in all of our routers
const galaxy = require('./galaxy.js');
const planet = require('./planet.js');
const star = require('./star.js');
const starsplanets = require('./starsplanets.js');

// Export all routers
module.exports = { galaxy, planet, star, starsplanets };
