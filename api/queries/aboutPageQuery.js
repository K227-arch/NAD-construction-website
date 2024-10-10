import * as col from 'https://esm.run/graphql-request';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("");

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

export function fetchAboutPageData(){
    return GRAPH_CMS_CLIENT.request(aboutUsQL)
}