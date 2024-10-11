/**
 * 
 * @param {@type} item 
 * @returns 
 */

function dom(item) {

  return document.querySelector(item)


}

const GRAPH_CMS_CLIENT = new graphqlRequest.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master"
);

const aboutUsQL = graphqlRequest.gql`
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

function fetchAboutPageData() {
  return GRAPH_CMS_CLIENT.request(aboutUsQL);
}


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
        let fetchedData = data.nadAboutspages;

        console.log("aboutus_page",fetchedData)
        //the about banner image container
        this.aboutusBannerImage.style.backgroundImage = `url(${fetchedData.aboutusBannerImage.url})`;

        //for the vision Image
        this.visionImage.src = fetchedData.visionMissionImage.url;

        //for the corevalue Elements
        this.coreValueElements.forEach((v, idx) => {
          let fetchedCoreValueData = corevaluesComponent[idx];
          //check with the corevalue name to be corresponding

          let corevlaueNameCorresponding = v.querySelector("h3");
          if (corevlaueNameCorresponding.innerHTML == fetchedCoreValueData.corevaluename) {
            let currentImage = v.querySelector("img");
            currentImage.src = fetchedCoreValueData.corevalueImage.url;
          }
        });
      });
    } catch (error) {
        console.log("fetched data for the aboutus data")
    }
  }
}


new AboutUsDataGetter().main()