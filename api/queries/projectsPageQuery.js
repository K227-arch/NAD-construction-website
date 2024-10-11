import * as col from "https://esm.run/graphql-request";
/**
 *
 * The GraphQL Client
 *
 */
export const GRAPH_CMS_CLIENT = new col.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master"
);

const projectsPageQL = col.gql`

{
  nadProjects {
    projectImages {
      url
    }
  }
}

`;

export function fetchProjectsPageData() {
  return GRAPH_CMS_CLIENT.request(projectsPageQL);
}
