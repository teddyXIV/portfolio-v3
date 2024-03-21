import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import styles from './App.module.css';
import ExperienceList from './components/ExperienceList';
import NavBar from './components/NavBar';


function App() {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const yPos = window.scrollY;
    setScrollY(yPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <Hero />
        <p>{scrollY}</p>
      </div>
      <div className={styles.stuff}>
        <div className={styles.navBar}>
          <NavBar />
        </div>
        <ProjectList />
        <hr />
        <ExperienceList />
      </div>
    </div>
  )

}

export default App;
