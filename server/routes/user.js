const router = require('express').Router();

router.get('/me', async (req, res) => {
  const { user } = req;
  console.log(user);
  if (user) return res.json(user);

  return res.json('Not logged in');
});

module.exports = router;
