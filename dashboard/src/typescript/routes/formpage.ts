import * as express from 'express';
const router:express.Router = express.Router();

router.get('/',(req:express.Request,res:express.Response) => {
    res.render('index',{
        layout:'formpage',
        content:'OwO form page >~<'
    })
});

module.exports = router;