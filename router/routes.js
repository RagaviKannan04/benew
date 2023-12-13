const Con = require('../controller/userCon')

const express = require('express')


const router = express.Router();


router.get('/getdata',Con.getdata)
router.post('/senddata', Con.postdata)
router.get('/getdata/:id',Con.getbyid)
router.delete('/delete/:id', Con.delbyid)
router.put('/update/:id', Con.updata)

module.exports = router;