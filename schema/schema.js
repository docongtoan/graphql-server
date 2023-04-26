const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book{
        id: ID
        name: String
        genre: String
    }

    type Author {
        id: ID!
        name: String
        age: Int
    }

    #root type
    type Query {
        books: [Book],
        book(id: Int): Book,
        authors: [Author],
        author(id: Int): Author
    }
`

module.exports = typeDefs;
