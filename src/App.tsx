import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';


function App() {


  return (
    <>
      <NavBar />

      <div className={styles.content}>
        <Intro />
        <ProjectList />
        <ExperienceList />
      </div>
    </>
  )
}

export default App
