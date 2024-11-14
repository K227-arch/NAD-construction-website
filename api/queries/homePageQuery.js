import * as col from "graphql-request";
/**
 *
 * The GraphQL Client
 *
 */
export const GRAPH_CMS_CLIENT = new col.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm3h1wo9j0bf506l24zzm2m74/master"
);

const mainPageQL = col.gql`

{
  nadMainpages {
    bannerImage {
      url
    }
    briefAbout {
      url
    }
    videoContainer {
      url
    }
   teamImage {
      url
   }
  }
}

`;

export function fetchHomePageData() {
  return GRAPH_CMS_CLIENT.request(mainPageQL);
}
