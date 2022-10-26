const router = require('express').Router()
const { request, response } = require('express')
const nunjucks = require('nunjucks')

router.get('/', (request, response) => {
    response.render('../views/index.html')
})

module.exports = router