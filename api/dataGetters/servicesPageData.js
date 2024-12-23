import { fetchServicesPageData } from "../queries/servicePageQuery.js";
import he from "he"
import { dom } from "../util.js";


class ServicesPageDataGetter {

  /**
   * service Image Banner
   */

    servicePageBanner = dom(".page-header2");
  /**
   * The service Elements
   */
  serviceElements = document.querySelectorAll(".services-container > div");

  main() {
    try {
      fetchServicesPageData().then((data) => {


        let fetchedServiceData = data.nadServices;

        let resolvedData = fetchedServiceData[0].serviceComponent

        console.log(fetchedServiceData)

        this.servicePageBanner.style.backgroundImage = `url(${fetchedServiceData[0].bannerImage.url})`;



        this.serviceElements.forEach((v, idx) => {
          let fetchedServiceDataIndex = resolvedData[idx];
          //check with the corevalue name to be corresponding

          let serviceNameElement = v.querySelector("h3");
          let graphqlServiceName = fetchedServiceDataIndex.serviceName;

          console.log("service_name_element",serviceNameElement);
          console.log("graphql_service_name",graphqlServiceName);


          let precodedHTML = he.decode(serviceNameElement.innerHTML)

          if(precodedHTML == graphqlServiceName) {
            let serviceImageElement = v.querySelector("img");
            serviceImageElement.style.height = "300px"
            serviceImageElement.style.width = "400px"

            serviceImageElement.src = fetchedServiceDataIndex.serviceImage.url;
          }else{

            console.log("----------------------------------------------")
            console.log("conflicting_Data_for",graphqlServiceName)
            console.log("conflicting_Data_for",serviceNameElement.innerText)


          }
        });
      });
    } catch (error) {}
  }
}

new ServicesPageDataGetter().main();
