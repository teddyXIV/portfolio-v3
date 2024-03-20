import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <Hero />
        <div className={styles.navBar}>
          <NavBar />
        </div>
      </div>
      <div className={styles.stuff}>
        <ProjectList />
        <ExperienceList />
      </div>
    </div>
  )
}

export default App;
