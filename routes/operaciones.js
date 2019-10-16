var router = require('express').Router();

router.get('/suma', (req, res) => {
    
    var i;
    var suma = 0;
    for (i = 0; i < 11; i++) {
        suma = suma + i;
    }    
    res.json({
        data: suma
    });
});

router.get('/mult', (req, res) => {
    
    var i;
    var multiplicar = 1;
    for (i = 1; i < 11; i++) {
        multiplicar = multiplicar * i;
    }    
    res.json({
        data: multiplicar
    });
});

router.post('/ejemplopost', (req, res) => {

    let midato = req.body.dato;

    res.json({
        status: 'Ok'
    });

});



module.exports = router;