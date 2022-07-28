const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const port = process.env.PORT || 3000;

app.use('/graphql', expressGraphQL({
    graphiql: true
}))


const server = app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = server;