import { fetchProjectsPageData } from "../queries/projectsPageQuery.js";
import { dom } from "../util.js";

class ProjectsDataGetter {
  /**
   * service Image Banner
   */

  projectsPageBanner = dom(".page-header3");

  projectImageElements = document.querySelectorAll(
    ".project-images-container  > div"
  );

  main() {
    try {
      fetchProjectsPageData().then((data) => {
        this.projectsPageBanner.style.backgroundImage = `url(${data.nadProjects[0].bannerImage.url})`;


        console.log("Project_Elements",this.projectImageElements)

        let _fetchedProjectsData = data.nadProjects[0].projectImages;

        console.log("images",_fetchedProjectsData)
        this.projectImageElements.forEach((el, index) => {
          let imageElement = el.querySelector("img");
          imageElement.style.height = "300px";
          imageElement.style.width = "400px";
          imageElement.src = _fetchedProjectsData[index].url;
        });
      });
    } catch (error) {
      console.log("Failed to fetch projects data");
    }
  }
}

new ProjectsDataGetter().main();
