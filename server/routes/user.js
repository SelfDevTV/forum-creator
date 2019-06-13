const router = require('express').Router();

router.get('/me', async (req, res) => {
  const { user } = req;

  if (user) return res.json(user);

  return res.json(false);
});

module.exports = router;
