import styles from './ProjectsStyles.module.css';
import DailyHarbour from '../../assets/ecommerce.jpg';
import ProjectCard from '../../common/ProjectCard';
import Bitcoin from '../../assets/bitcoin.jpg';
import os from '../../assets/os.jpg';
import ninja from '../../assets/ninja.jpg';
import moltox from '../../assets/moltox.jpg'; 

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={DailyHarbour}
          link="https://github.com/ANGADJEET/DailyHarbour"
          h3="Daily Harbour"
          p="E-commerce Application"
        />
        <ProjectCard
          src={Bitcoin}
          link="https://cryptoprediction-lfz7d5bab4itjhkaybf5xn.streamlit.app/"
          h3="CryptoVision"
          p="Cryptocurrency Predictor"
        />
        <ProjectCard
          src={ninja}
          link="https://github.com/ANGADJEET/STICK_HERO"
          h3="Stick-Hero"
          p="Custom Stick-Hero Game"
        />
        <ProjectCard
          src={os}
          link="https://github.com/ANGADJEET/OS_SEM_3"
          h3="SysShell"
          p="System application in C"
        />
        <ProjectCard
          src={moltox}
          link="https://github.com/ANGADJEET/MolToxInsight"
          h3="MolToxInsight"
          p="Molecular Toxicity Prediction"
        />
      </div>
    </section>
  );
}

export default Projects;
