import * as col from 'graphql-request';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm3h1wo9j0bf506l24zzm2m74/master");

const servicesQL = col.gql`
{
  nadServices {
     bannerImage {
      url
    }
    serviceComponent {
      serviceName
      serviceImage {
        url
      }
    }
  }
}

`;

export function fetchServicesPageData(){
    return GRAPH_CMS_CLIENT.request(servicesQL)
}