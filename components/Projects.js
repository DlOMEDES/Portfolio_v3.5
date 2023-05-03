import styles from "@/styles/projects.module.scss";
import SectionIntro from "@/components/SectionIntro";
import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    img: "/images/demo1.png",
    title: "Theme Build",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quam officiis provident accusantium blanditiis quod nisi libero fuga corporis id!",
    tech: "WordPress, Elementor",
  },
  {
    id: 2,
    img: "/images/demo2.png",
    title: "Custom Theme",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quam officiis provident accusantium blanditiis quod nisi libero fuga corporis id!",
    tech: "WordPress, PHP",
  },
  {
    id: 3,
    img: "/images/demo3.png",
    title: "Landing Page",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quam officiis provident accusantium blanditiis quod nisi libero fuga corporis id!",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: 4,
    img: "/images/demo4.png",
    title: "Web App",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quam officiis provident accusantium blanditiis quod nisi libero fuga corporis id!",
    tech: "React, Sass",
  },
];

const ProjectItem = ({ img, title, tech, desc }) => {
  return (
    <article className={styles.article}>
      <img src={img} alt="" width="30rem" height="30rem" />

      <div className={styles.article_body}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{tech}</span>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <section className={styles.projects}>
      <SectionIntro title="Projects" styleClass="projects" />

      <div className={styles.items}>
        {projectData.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
