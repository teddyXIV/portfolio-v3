import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import styles from './App.module.css';

function App() {


  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <Intro />
        <ProjectList />
      </div>
    </>
  )
}

export default App
