const {Planet} = require('../models/index');

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  const planets = await Planet.findAll()
  res.status(200).json(planets)
}

// Show resource
const show = (req, res) => {
  // Respond with a single object and 2xx code
  res.status(200).json(`Planet#show(:id)`)
}

// Create a new resource
const create = (req, res) => {
  // Issue a redirect with a success 2xx code
  res.redirect(`/planets`, 201)
}

// Update an existing resource
const update = (req, res) => {
  // Respond with a single resource and 2xx code
  res.status(200).json(`/planets/${req.params.id}`, )
}

// Remove a single resource
const remove = (req, res) => {
  // Respond with a 2xx status code and bool
  res.status(204).json(true)
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
