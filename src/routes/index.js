const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"title": "Hello World with Node js"});
})


module.exports = router;