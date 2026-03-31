const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
