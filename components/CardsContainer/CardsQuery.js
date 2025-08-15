import gql from "graphql-tag";

export const CardsQuery = gql`
{
  cardsCollection {
    items {
      title
      subtitle
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      subtitle
      caption
      logo {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}`;