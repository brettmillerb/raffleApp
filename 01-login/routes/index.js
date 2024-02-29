var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

router.get('/buy', requiresAuth(), function (req, res, next) {
  var ticketCount = req.query.ticketCount;
  res.render('buy', {
    title: 'Buy Tickets',
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    ticketCount: ticketCount
  });
});

module.exports = router;
