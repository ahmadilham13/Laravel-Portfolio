import { useState } from "react"
import ProjectTag from "../../atoms/ProjectTag"
import ProjectCard from "../../atoms/ProjectCard"

const projectsData = [
    {
        id: 1,
        title: "ILM Topup (DEVELOPMENT)",
        description: "My Web Topup using Nuxt js (Vue)",
        image: "/images/statics/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        // previewUrl: "http://ilmtopup.ahmadilm.com/"
    },
    {
        id: 2,
        title: "ILM Topup API (DEVELOPMENT)",
        description: "My API Topup using Asp.Net (C#)",
        image: "/images/statics/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "",
        // previewUrl: "http://ilm-be.ahmadilm.com/swagger/index.html"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    const handlerTagChange = (newTag) => {
        setTag(newTag)
    }

    const fiteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )
    return (
        <section id="projects">
            <h1 className='text-4xl font-bold text-white mt-4 mb-4'>My Projects</h1>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handlerTagChange} name="All" isSelected={tag === "All"}/>
                <ProjectTag onClick={handlerTagChange} name="Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handlerTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {fiteredProjects.length != 0 ? 
                    fiteredProjects.map((project) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
                    ))
                :
                    <div className='items-center justify-center'>
                        <h2 className='text-[#ADB7BE] text-center lg:text-lg'>Projects Not Found</h2>
                    </div>
                }
            </div>
        </section>
    )
}
export default ProjectSection;