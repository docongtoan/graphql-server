# graphql-server
graphql | mongoose | node.js (express) | appollo-server-express
# start and test
step: 
  1. npm i
  2. nodemon s
  3. click link http://localhost:4000/graphql
  4. copy and paste query below to tab Explorer:
    query getbook{
          books {
            id
            name
            genre
          }
          authors {
            id
            name
            age
          }
          book(id: 1){
            id
            name
            genre
          }
          author(id: 2){
            id
            name
            age
          }
    }
  5. view result here!
