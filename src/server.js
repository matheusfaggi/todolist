import app from './app'

console.log(`API rodando na porta: ${process.env.PORT}`)

app.listen(process.env.PORT)
