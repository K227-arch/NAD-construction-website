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
  aboutImageElement = dom(".about-img > img");

 
  teamImageElement = dom("#team-sl-image")

  main() {
    try {
      fetchHomePageData().then(
        (/** @type {{ nadMainpages: any[]; }} */ data) => {
          let fetchedData = data.nadMainpages[0];

          console.log("home_page", fetchedData);

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
          let videoContainerFetchedData = fetchedData.videoContainer;
          this.createVideoInterAutoPlay(videoContainerFetchedData.url);

          //data for the teamImage
          let teamImageUrlSrc = fetchedData.teamImage.url;
          this.teamImageElement.src = teamImageUrlSrc;

        }
      );
    } catch (error) {
      console.log(
        "An error occured while trying to fetch data from the server",error
      );
    }
  }

  /**
   * @param {any} videoSrc
   */
  createVideoInterAutoPlay(videoSrc) {
    const videoElement = document.getElementById("video");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set autoplay URL when visible
            // @ts-ignore
            videoElement.src = videoSrc;

            //@ts-ignore
            videoElement.play();
            // @ts-ignore
          } else {
            // Reset URL to stop playing when not visible
            // @ts-ignore
            videoElement.src = "";
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    // @ts-ignore
    observer.observe(videoElement);
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
