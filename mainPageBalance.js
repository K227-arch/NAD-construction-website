import * as col from 'https://cdn.jsdelivr.net/npm/graphql-request@7.1.0/+esm';
/**
 *
 * The GraphQL Client  
 * 
 */
export const GRAPH_CMS_CLIENT =  new col.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master");

const mainPageQL = col.gql`

{
  nadMainpages {
    bannerImage {
      url
    }
    briefAbout {
      url
    }
    videoContainer {
      url
    }
    engineerComponent {
      engineerName {
        text
      }
      engineerCompanypost {
        text
      }
      engineerImage {
        url
      }
    }
    testimonialImages {
      url
    }
  }
}

`;

export function fetchHomePageData(){
    return GRAPH_CMS_CLIENT.request(mainPageQL)
}

export function dom(item) {

    return document.querySelector(item)


}



class MainDataBalance {

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
  main() {
    try {
      fetchHomePageData().then((data) => {

        let fetchedData = data.nadMainpages[0];

        //data from the banner Images
        let bannerImageFetchedData = fetchedData.bannerImage
        this.distributeForBannerImages(bannerImageFetchedData[0],bannerImageFetchedData[1],bannerImageFetchedData[2])



        console.log(fetchedData)


        
      });
    } catch (error) {}
  }


  distributeForBannerImages(img1,img2,img3){

    this.bannerImgOneElement.src = img1.url;
    this.bannerImgTwoElement.src = img2.url;
    this.bannerImgThreeElement.src = img3.url;



  }
}

new MainDataBalance().main();
