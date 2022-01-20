import { useState, useEffect } from "react";
import GithubLogo from "../assets/GithubLogo";
import ProjectThumbnail from "./ProjectThumbnail";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    let projectsToRender = [373171964, 438635396, 430790971, 417418149, 268588407, 428344885, 431807726];

    useEffect(() => {
        fetch('https://api.github.com/users/nickglu86/repos')
            // Handle success
            .then(response => response.json()) 
            .then(json => {
                setProjects(json);
            })  
            .catch(err => console.log('Request for Github Projects Failed', err)); // Catch errors
    }, [])

    return ( 
        <section className="projects">
            <div className="inner">
                <h2>My Projects</h2>    
                <div className="projects-list">
                {
                    projects.filter(project => projectsToRender.includes(project.id)).map( (project, index) => {
                        return(
                            <div className="project" key={index}>
                                <div className="project-info">
                                    <a href={project.html_url} target="_blank">
                                        <div className="prj-title">
                                            <GithubLogo />
                                            <h3> {project.name}</h3>
                                        </div>
                                    </a>
                                    <p> {project.description}</p>
                                    <a href= {project.homepage} target="_blank">
                                     <span>{project.homepage}</span>
                                    </a>
                                </div>
                                <div className="project-thumb">
                                      <ProjectThumbnail name={project.name} />
                                </div>

                            </div>
                        );
                    })
                }
                </div>
            </div>
        </section>
     );
}

export default Projects;