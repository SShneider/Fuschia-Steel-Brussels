const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next)=>{
    try {
        res.status(200).send('HELLO')
    } catch (error) {
        next(error)
    }
})