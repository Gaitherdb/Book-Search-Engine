import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook( $bookId: String!, $authors: [String], $description: String!, $title: String!, $image: String, $link: String ) {
    saveBook( bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
        _id
        username
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
        }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook( $bookId: String!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
      }
    }
  }
`;
