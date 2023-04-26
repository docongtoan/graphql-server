# graphql-server
graphql | mongoose | node.js (express) | appollo-server-express
# start and test
step: 
  - npm i
  - nodemon s
  - click link http://localhost:4000/graphql
  - copy and paste query below to tab Explorer:
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
  - view result here
