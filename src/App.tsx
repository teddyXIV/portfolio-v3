import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import About from './components/About';


function App() {

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <Hero />
        <NavBar />
      </div>
      <div className={styles.stuff}>
        <About />
        <hr />
        <Skills />
        <hr />
        <ProjectList />
        <hr />
        <ExperienceList />
      </div>
    </div>
  )

}

export default App;
