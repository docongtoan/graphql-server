const { books, authors } = require('../data/static');

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => +book.id === +args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => +author.id === +args.id),
    },
    Book: {
        author: (parent, args) => {
            return authors.find(author => author.id === parent.id);
        }
    },
    Author: {
        book: (parent, args) => {
            return books.filter(book => book.id === parent.id);
        }
    }
}
module.exports = resolvers;