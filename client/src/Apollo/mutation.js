import { gql } from '@apollo/client'

export const AddSingleMovie =gql`
mutation AddMovie($input: addMovieInput) {
  addMovie(input: $input) {
    name
    details
    duration
    image
    publishedYear
    type
  }
}
`