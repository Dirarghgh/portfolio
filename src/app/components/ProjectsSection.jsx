"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SOAR-SHIELD",
    description: " Find the vulnerabilities and reporting detect and block the malicious traffic manage the company devices routers,firewalls ...Using machine learning and React js and Node js .",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "EVENTU ",
    description: "Mangement conferences plateform using React.js and Laravel .",
    image: "/images/projects/33.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZKarim13/soar",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "DIAPREDICT",
    description: "Detection and predection of the diabetes and diabetic retionpathy using deep learning and React js and fastapi.",
    image: "/images/projects/dia.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Plantabird",
    description: "Devloping plateform using laravel for the complany plantabird which is passionate about birds and committed to providing the best products and advice for the well-being of your feathered companions.",
    image: "/images/projects/p.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dirarghgh/plantabird",
    previewUrl: "https://plantabird.com/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
     
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
