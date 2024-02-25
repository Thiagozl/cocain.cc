const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('OPA MANO')
  res.sendFile(path.resolve(__dirname, '../index.html'));
});
router.all('*', (req, res) => {
  res.redirect('/')
})
/* router.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/contact.html'));
}); */

// triggers on all URLs and sends back a 404 page
/* router.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../views/404.html'));
}); */
 
module.exports = router;