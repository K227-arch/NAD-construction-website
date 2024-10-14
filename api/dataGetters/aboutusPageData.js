import { dom } from "../util.js";
import { fetchAboutPageData } from "../queries/aboutPageQuery.js";

class AboutUsDataGetter {
  /**
   * Aboutus Banner Image
   */

  aboutusBannerImage = dom(".page-header1");

  /**
   * VisionAboutImage
   */
  visionImage = dom(".about-img-cls > img");

  /**
   * Corevalues components
   */

  coreValueElements = document.querySelectorAll(".core-values-container > div");

  main() {
    try {
      fetchAboutPageData().then((data) => {
        let fetchedData = data.nadAboutspages[0];

        console.log("aboutus_page",fetchedData)
        //the about banner image container
        this.aboutusBannerImage.style.backgroundImage = `url(${fetchedData.aboutusBannerImage.url})`;

        //for the vision Image
        this.visionImage.src = fetchedData.visionMissionImage.url;

        console.log("vison-mission",visionMissionImage)

        console.log(this.coreValueElements)

        //for the corevalue Elements
        // this.coreValueElements.forEach((v, idx) => {
        //   let fetchedCoreValueData = corevaluesComponent[idx];
        //   //check with the corevalue name to be corresponding

        //   let corevlaueNameCorresponding = v.querySelector("h3");
        //   if (corevlaueNameCorresponding.innerHTML == fetchedCoreValueData.corevaluename) {
        //     let currentImage = v.querySelector("img");
        //     currentImage.src = fetchedCoreValueData.corevalueImage.url;
        //   }
        // });
      });
    } catch (error) {
        console.log("fetched data for the aboutus data")
    }
  }
}


new AboutUsDataGetter().main()