var router = require('express').Router();

router.get('/product', (req, res) => {
    
    let miProducto = 5*6;

    res.json({
        data: miProducto
    });
});

module.exports = router;