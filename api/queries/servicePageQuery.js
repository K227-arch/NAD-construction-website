import * as col from 'https://esm.run/graphql-request';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("");

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