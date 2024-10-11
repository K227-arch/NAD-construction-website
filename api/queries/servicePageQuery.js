import * as col from "graphql-request";
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master");

const servicesQL = col.gql`
{
  nadServices {
    serviceName
    serviceImage {
      url
    }
  }
}

`;

export function fetchServicesPageData(){
    return GRAPH_CMS_CLIENT.request(servicesQL)
}