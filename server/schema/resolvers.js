const { users, movies } = require('./fakeData')
const _ = require('lodash')
const resolvers = {

    Query: {
        users: () => users,
        user: (parent, arg) => {

            const id = arg.id;
            return filteredUser = _.find(users, { id: Number(id) })
        },
        movies: () => movies,
        getSingleMovie: (parent, arg) => {
            const movieName = arg.name
            const filteredMovie = movies.find((name) => {
                return name.name == movieName;
            })
            return filteredMovie;
        }
    },
    Users: {
        favouriteMovie: () => {
            return _.filter(movies, (movie) => {
                return movie.publishedYear >= 2000
            })
        }
    },
    Mutation: {
        createNewUser: (parent, arg) => {
            let newUser = arg.input
            users.push(newUser)
            return newUser
        },
        updateOldUser: (parent, arg) => {
            let { id, name } = arg.input;
            let updatedUserNmae;
            users.forEach((user) => {
                if (user.id == id) {
                    user.name = name
                    updatedUserNmae = user
                }
            })
            return updatedUserNmae
        },
        deleteUser:(parent,arg)=>
        {
            let id =Number(arg.id) 
            _.remove(users,(user)=>user.id==id)
            return null
        },
        addMovie:(parent,arg)=>
        {
            let newMovie = arg.input
            movies.push(newMovie)
            return newMovie
        }

    }
}
module.exports = { resolvers }