const cors = require('cors')
const index = require('./routes/index')
const produtos = require('./routes/produtosRoute')
const db = require('./database/dbConnect')

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('BD conectado com sucesso')
})

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', index)
app.use('/produtos', produtos)

module.exports = app
