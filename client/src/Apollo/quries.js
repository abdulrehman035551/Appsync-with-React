import { gql } from '@apollo/client'

export const getUsers = gql`
query Users {
  users {
    id
    name
  }
}
`
export const getMovies = gql`
query movies {
    movies {
    details
    duration
    image
    name
    publishedYear
  }
}
`
export const getSingleMovie = gql`
query GetSingleMovie($name: String!) {
  getSingleMovie(name: $name) {
    details
    duration
    image
    name
    publishedYear
    type
  }

}
`