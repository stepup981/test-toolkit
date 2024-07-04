export const GET_REPOSITORIES_QUERY = `
  query($first: Int!, $after: String, $query: String!) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            stargazerCount
            updatedAt
            owner {
              url
            }
          }
        }
        cursor
      }
    }
  }
`;