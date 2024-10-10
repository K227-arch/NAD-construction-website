import * as col from 'https://esm.run/graphql-request';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master");

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
    engineerComponent {
      engineerName {
        text
      }
      engineerCompanypost {
        text
      }
      engineerImage {
        url
      }
    }
    testimonialImages {
      url
    }
  }
}

`;

export function fetchHomePageData(){
    return GRAPH_CMS_CLIENT.request(mainPageQL)
}