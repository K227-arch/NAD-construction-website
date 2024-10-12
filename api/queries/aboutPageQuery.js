import * as col from "graphql-request";
/**
 *
 * The GraphQL Client
 *
 */
export const GRAPH_CMS_CLIENT = new col.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master"
);

const aboutUsQL = col.gql`
{
  nadAboutspages{
    aboutusBannerImage{
      url
    }
    visionMissionImage{
      url
    }
    corevaluesComponent {
      corevaluename
      corevalueImage {
        url
      }
    }
  }
}

`;

export function fetchAboutPageData() {
  return GRAPH_CMS_CLIENT.request(aboutUsQL);
}
