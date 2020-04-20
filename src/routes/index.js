const express= require('express');
const router= express.Router();


router.get('/', (req,res) => {
    res.render('index',{title: 'Fist WebSite'});
    });

router.get('/contacto', (req, res) => {
    res.render('contacto', { title: 'Pagina de Contacto' });
});

    module.exports=router;