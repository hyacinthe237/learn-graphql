import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './graphql/resolvers.js'
import schema from './graphql/schema.js'

const app = express()

app.use(express.static("public"))

app.use("/graphql", graphqlHTTP({
  schema : schema,
  rootValue : resolvers,
  graphiql: true
}))

app.listen(8085, console.log('port 8085'))