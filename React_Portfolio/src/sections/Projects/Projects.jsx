import styles from "./ProjectsStyles.module.css";
import leftover from "../../assets/leftover.jpeg";
import code from "../../assets/code.jpg";
import Movie from "../../assets/Movie.jpg";
import live from "../../assets/live.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Movie}
          link="https://vennela-vasireddy.github.io/Movie_Magnet_Hub/"
          h3="Movie Magnet Hub"
          p="Love Watching Movies and Reviewing Them? Ta-da, Entertainment Is Just A Tap Away"
        />
        <ProjectCard
          src={live}
          link="https://github.com/Vennela-Vasireddy/Live_Train_AI_Model"
          h3="Live Train AI Model"
          p="Wanna Play With An AI Model? Here U Go Try My Live Train Waste Segregation Model"
        />
        <ProjectCard
          src={leftover}
          link="https://github.com/CSUF-CPSC121L-2024S/leftoverfoodtracker-Vennela-Vasireddy"
          h3="Leftover Food Tracker"
          p="Looking To Reduce Food Wastage And Find Solutions? Try This"
        />
        <ProjectCard
          src={code}
          link="https://github.com/Vennela-Vasireddy/LeetCode"
          h3="LeetCode Solutions"
          p="My LeetCode Solutions. Trying To Keep Up With The Pace"
        />
      </div>
    </section>
  );
}

export default Projects;
