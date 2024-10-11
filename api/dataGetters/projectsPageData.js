/**
 *
 * @param {@type} item
 * @returns
 */

function dom(item) {
  return document.querySelector(item);
}

const GRAPH_CMS_CLIENT = new graphqlRequest.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm1yhii9j04qr07w2iq1d24ql/master"
);

const projectsPageQL = graphqlRequest.gql`

{
  nadProjects {
    projectImages {
      url
    }
  }
}

`;
 function fetchProjectsPageData() {
  return GRAPH_CMS_CLIENT.request(projectsPageQL);
}

class ProjectsDataGetter {
  projectImageElements = document.querySelectorAll(
    ".project-images-container  > div"
  );

  main() {
    try {
      fetchProjectsPageData().then((data) => {
        let _fetchedProjectsData = data.nadProjects;

        console.log("projects", _fetchedProjectsData);

        this.projectImageElements.forEach((el, index) => {
          let imageElement = el.querySelector("img");
          imageElement.src = _fetchedProjectsData[index].url;
        });
      });
    } catch (error) {
      console.log("Failed to fetch projects data");
    }
  }
}

new ProjectsDataGetter().main();
