export const GET_REPOSITORIES_QUERY = `
  query($first: Int!, $after: String) {
    search(query: "is:public", type: REPOSITORY, first: $first, after: $after) {
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
      }
    }
  }
`;
