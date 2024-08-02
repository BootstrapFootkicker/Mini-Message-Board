const express = require('express');
const router = express.Router();

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Page' });
});

router.post('/new', function(req, res, next) {
  messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
  res.redirect('/');
});

router.get('/details/:id', function(req, res, next) {
  const message = messages[req.params.id];
  if (message) {
    res.render('details', { title: 'Details', message: message });
  } else {
    res.status(404).send('Message not found');
  }
});

module.exports = router;