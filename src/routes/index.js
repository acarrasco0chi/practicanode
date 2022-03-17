const express= require('express');
const router = express.Router();
//aqui  se usa el nombre con html, habria que cambiar index.html es todo
router.get('/',(req,res)=>{
    res.render('index',{title:'first website'});
});

router.get('/contact',(req,res)=>{
    res.render('contact',{title:'contact page'});
});
module.exports = router;    