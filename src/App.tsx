import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';


function App() {
  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.stuff}>
        <ProjectList />
        <ExperienceList />
      </div>
    </div>
  )
}

export default App;
