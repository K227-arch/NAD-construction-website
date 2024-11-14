import * as col from "graphql-request";
/**
 *
 * The GraphQL Client
 *
 */
export const GRAPH_CMS_CLIENT = new col.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm3h1wo9j0bf506l24zzm2m74/master"
);

const projectsPageQL = col.gql`

{
  nadProjects {
    bannerImage {
      url
    }
    projectImages(first:100) {
      url
    }
  }
}

`;

export function fetchProjectsPageData() {
  return GRAPH_CMS_CLIENT.request(projectsPageQL);
}
