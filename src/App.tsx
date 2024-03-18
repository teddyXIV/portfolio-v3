import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <NavBar />

      <div className={styles.content}>
        <Intro />
        <FontAwesomeIcon icon={faShip} size='10x' />
        <FontAwesomeIcon icon={faWater} size='10x' />
        <FontAwesomeIcon icon={faFish} size='10x' />
        <FontAwesomeIcon icon={faTree} size='10x' />
        <FontAwesomeIcon icon={faBoxOpen} size='10x' />

        <ProjectList />
        <ExperienceList />
      </div>
    </>
  )
}

export default App
