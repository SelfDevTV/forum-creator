const router = require('express').Router();
const passport = require('passport');

/* Facebook Auth */

const CLIENT_URL = 'http://localhost:3000';

router.get(
  '/facebook',

  passport.authenticate('facebook', { scope: 'email', display: 'popup' })
);

//

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/'
  })
);

router.get('/facebook/login', (req, res) => {
  console.log(req.user);
  res.redirect(CLIENT_URL);
});

router.get('/logout', (req, res) => {
  console.log('logout triggered');
  req.logout();
  res.json(false);
});

/* Facebook Auth */

module.exports = router;
