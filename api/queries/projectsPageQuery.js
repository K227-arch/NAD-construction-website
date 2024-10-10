import * as col from 'https://esm.run/graphql-request';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("");


const projectsPageQL = col.gql`

{
  nadProjects {
    apartment {
      url
    }
    residential {
      url
    }
    featureEndToEnd {
      url
    }
  }
}

`;

export function fetchProjectsPageData(){
    return GRAPH_CMS_CLIENT.request(projectsPageQL)
}