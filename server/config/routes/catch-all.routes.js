const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});
