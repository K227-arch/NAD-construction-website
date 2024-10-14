//@ts-check
import { dom } from "../util.js";
import { fetchHomePageData } from "../queries/homePageQuery.js";

class MainDataGetter {
  /**
   * Banner Images
   */
  bannerImgOneElement = dom(".banner-img-1");
  bannerImgTwoElement = dom(".banner-img-2");
  bannerImgThreeElement = dom(".banner-img-3");

  /**
   * About Image
   */
  aboutImageElement = dom(".about-img");

  /**
   * video Element
   */
  videoElement = dom(".btn-play");

  /**
   * Team Elements
   */
  teamElements = document.querySelectorAll(
    ".team-container > div.team-item-base"
  );


  /**
   * Testimonial Images
   */

  testimonyImages = document.querySelectorAll(".testimonial-slider-nav > div")

  main() {
    try {
      fetchHomePageData().then(
        (/** @type {{ nadMainpages: any[]; }} */ data) => {
          let fetchedData = data.nadMainpages[0];

          console.log("home_page",fetchedData)

          //data from the banner Images
          let bannerImageFetchedData = fetchedData.bannerImage;
          this.distributeForBannerImages(
            bannerImageFetchedData[0],
            bannerImageFetchedData[1],
            bannerImageFetchedData[2]
          );

          //data for the AboutImage
          let aboutImageFetchedData = fetchedData.briefAbout;
          this.aboutImageElement.src = aboutImageFetchedData.url;

          //data for the VideoContainer
          let videoContainerFetchedData = fetchedData.videoContainer
          this.videoElement.setAttribute("data-src",videoContainerFetchedData.url) 

          //data for the team Members
          this.distributeDataForTeamElements(fetchedData.engineerComponent)

          //data for the testimony Images
          this.distributeDataForTestimonialImages(fetchedData.testimonialImages)
        }
      );
    } catch (error) {

      console.log("An error occured while trying to fetch data from the server")
    }
  }

  /**
   * @param {{url:string}[]} data
   */
  distributeDataForTestimonialImages(data){
    this.testimonyImages.forEach((d,idx)=>{
      let quantifiedData = data[idx]

      let imgElement = d.querySelector('img');
      // @ts-ignore
      imgElement.src  = quantifiedData.url;

    })
   
  }

  /**
   * @param {{engineerName:{text:string},engineerCompanypost:{text:string},engineerImage:{url:string}}[]} data
   */
  distributeDataForTeamElements(data){

    this.teamElements.forEach((v,index)=>{
        let teamImageElement = v.querySelector('img');
        let teamTitle = v.querySelector('h2')
        let teamPost = v.querySelector('p');

        let quantifiedData = data[index]

        // @ts-ignore
        teamImageElement.src = quantifiedData.engineerImage.url;
        //@ts-ignore
        teamTitle.innerHTML = quantifiedData.engineerName.text;
        //@ts-ignore
        teamPost.innerHTML = quantifiedData.engineerCompanypost.text;


    })
  }

  /**
   * @param {{ url: string; }} img1
   * @param {{ url:string; }} img2
   * @param {{ url:string; }} img3
   */
  distributeForBannerImages(img1, img2, img3) {
    this.bannerImgOneElement.src = img1.url;
    this.bannerImgTwoElement.src = img2.url;
    this.bannerImgThreeElement.src = img3.url;
  }
}

new MainDataGetter().main();
 