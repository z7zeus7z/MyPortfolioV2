import React from 'react'
import style from '../../styles/Projects.module.css'
import ProjecCard from './ProjecCard'
import project1img from '../../assets/DriveSpot.png'
const Projects = () => {
    const projects = [
  {
   id:1,
   Img :project1img,
   Title:"DriveSpot",
   Desc:"Full-stack MERN project built with React, Node.js, Express, and MongoDB. Includes car browsing, filtering, image gallery, authentication, and admin dashboard – all with a sleek modern UI",
   Tech:["React","Js","NodeJs","MongoDB","express"],
   Git:"https://github.com/z7zeus7z/DriveSpot",
   Live:"https://drive-spot.vercel.app"
  },
  
];
  return (
    <>
        <div id='projects' className={style.projectPageContainer}>
            <div className='wrapper'>
                <div className={style.projectCardsContainer}>
                    {projects.map((project,index)=>(
                      <ProjecCard
                        key={project.id}
                        Img={project.Img}
                        Title={project.Title}
                        Desc = {project.Desc}
                        Tech={project.Tech}
                        Git={project.Git}
                        Live={project.Live}
                        reverse={index % 2 !==0}
                      />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects