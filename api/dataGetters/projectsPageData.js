import { fetchProjectsPageData } from "../queries/projectsPageQuery.js"

class ProjectsDataGetter  {

 
 
    projectImageElements = document.querySelectorAll(".project-images-container  > div")


    main(){

        try {
            
            fetchProjectsPageData().then((data)=>{

                let _fetchedProjectsData = data.nadProjects[0].projectImages;
                this.projectImageElements.forEach((el,index)=>{

                    let imageElement = el.querySelector('img');
                    imageElement.src = _fetchedProjectsData[index].url

                })

            })
        } catch (error) {
            console.log("Failed to fetch projects data")
        }
    }
}

new ProjectsDataGetter().main()