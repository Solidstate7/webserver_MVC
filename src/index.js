const express = require('express')
const router = express.Router()
const boardRouter = require('../src/board/board.route')

router.get('/', (req, res) => {
  res.render('index.html')
})

router.use('/boards', boardRouter)

module.exports = router