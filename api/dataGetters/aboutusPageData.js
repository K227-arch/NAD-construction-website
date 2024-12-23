import { dom } from "../util.js";
import { fetchAboutPageData } from "../queries/aboutPageQuery.js";
import he from "he"

class AboutUsDataGetter {
  /**
   * Aboutus Banner Image
   */

  aboutusBannerImage = dom(".page-header1");

  /**
   * VisionAboutImage
   */
  visionImages = document.querySelectorAll(".about-us-carousel-item > div");

  /**
   * Corevalues components
   */

  coreValueElements = document.querySelectorAll("#core-values-area > div");

  main() {
    try {
      fetchAboutPageData().then((data) => {
        let fetchedData = data.nadAboutspages[0];

        console.log("aboutus_page", fetchedData);
        //the about banner image container
        this.aboutusBannerImage.style.backgroundImage = `url(${fetchedData.aboutusBannerImage.url})`;

        //for the vision Images
        this.visionImages.forEach((divEle, index) => {
          let imgContainer = divEle.querySelector("img");
          console.log("img-container", imgContainer);

          imgContainer.src = fetchedData.visionMissionImage[index].url;
        });

        console.log("items", this.coreValueElements);
        //for the corevalue Elements
        this.coreValueElements.forEach((v, idx) => {
          let fetchedCoreValueData = fetchedData.corevaluesComponent[idx];
          //check with the corevalue name to be corresponding

          console.log("fetchd-core-value-item", fetchedCoreValueData);

          let corevlaueNameCorresponding = v.querySelector("h3");
          let encodedCoreValuesHTML = he.decode(corevlaueNameCorresponding.innerHTML)
          if (
            encodedCoreValuesHTML ==
            fetchedCoreValueData.corevaluename
          ) {
            let currentImage = v.querySelector("img");
            currentImage.style.height = "300px";
            currentImage.style.width = "400px";


            currentImage.src = fetchedCoreValueData.corevalueImage.url;
          }
        });
      });
    } catch (error) {
      console.log("fetched data for the aboutus data");
    }
  }
}

new AboutUsDataGetter().main();
