let express = require('express')
let nunjucks = require('nunjucks')

const PORT = process.env.PORT || 5000
const App = express()

App.use(express.static(`static`))

/* Template */
nunjucks.configure('./views', {
    autoescape: true,
    express: App
});

/* Route */
App.use('/', require('./routes/index'))

App.listen(PORT, () => {
    console.log(`Server is working in ${PORT}`)
})