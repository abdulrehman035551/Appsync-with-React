const { gql } = require('apollo-server')

const typeDefs = gql`
type Query{
    users: [Users!]!
    user(id:ID!):Users! 
    movies:[Movie!]!
    getSingleMovie(name:String!):Movie!
}
type Users{
    id:ID!
    name: String
    usernmae: String
    nationality: String
    age: Int
    friends:[Users]
    favouriteMovie:[Movie]
}
type Movie{
    name:String
    duration:Int
    details:String
    publishedYear:Int
    image:String
    type:String
    
}
type Mutation{
    createNewUser(input:createUserInput):Users!
    updateOldUser(input:updateUserName):Users!
    deleteUser(id:ID):Users!
    addMovie(input:addMovieInput):Movie!
}

input createUserInput {
    id:ID!
    name:String
    age:Int
    usernmae:String
}
input updateUserName{
    id:ID!
    name:String
}
input addMovieInput{
    name:String
    duration:Int
    details:String
    publishedYear:Int
    image:String
    type:String
}
`
module.exports = { typeDefs }