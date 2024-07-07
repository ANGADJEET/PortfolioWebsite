import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetcode from '../../assets/leetcode.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import angad3bg from '../../assets/angad3bg.png';
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={angad3bg}
          className={styles.hero}
          alt="Profile picture of Angadjeet Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Angadjeet
          <br />
          Singh
        </h1>
        <h2>Software Developer</h2>
        <span>
        <a href="https://github.com/ANGADJEET">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/angadjeet-singh/">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://leetcode.com/u/Quetzalcoatl00/">
            <img src={leetcode} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        A Computer science student with passion for web development, algorithms, and machine learning. Worked on various projects including e-commerce applications, game development in java, and research in molecular toxicity prediction.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
