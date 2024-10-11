import { fetchServicesPageData } from "../queries/servicePageQuery.js";

class ServicesPageDataGetter {
  /**
   * The service Elements
   */
  serviceElements = document.querySelectorAll(".core-values-container > div");

  main() {
    try {
      fetchServicesPageData().then((data) => {
        let fetchedServiceData = data.nadServices;
        console.log("services_page",fetchedServiceData )

        this.serviceElements.forEach((v, idx) => {
          let fetchedServiceDataIndex = fetchedServiceData[idx];
          //check with the corevalue name to be corresponding

          let serviceName = v.querySelector("h3");
          if (serviceName.innerHTML == fetchedServiceDataIndex.serviceName) {
            let currentImage = v.querySelector("img");
            currentImage.src = fetchedServiceDataIndex.serviceImage.url;
          }
        });
      });
    } catch (error) {}
  }
}

new ServicesPageDataGetter().main();
