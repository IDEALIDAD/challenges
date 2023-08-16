import React, { useState, useEffect } from 'react';
import './App.css';
import { styles } from './styles';

const App = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.topContainer}>
        <div style={styles.notFoundText}>404 NOT FOUND</div>
      </div>
      <div style={styles.pageContainer}>
        <div style={{ ...styles.container, gridTemplateColumns: isMobileView ? '1fr' : '1fr 1fr' }}>
          <div style={styles.imageContainer}>
            <img src="https://us.123rf.com/450wm/prettyvectors/prettyvectors1803/prettyvectors180300072/98338878-feliz-sonriente-personaje-de-espantap%C3%A1jaros-ilustraci%C3%B3n-aislada-de-dibujos-animados-plano-de.jpg" alt="Imagen" style={styles.imageContainerImg} />
          </div>
          <div style={styles.contentContainer}>
            <div style={styles.title}>I have bad news for you</div>
            <div style={styles.subtitle}>The page you are looking for might be removed or is temporarily unavailable</div>
            <button style={styles.button}>Back to homepage</button>
          </div>
        </div>
        <footer style={styles.footer}>Creado por Alejandro Aguado</footer>
      </div>
    </div>
  );
}

export default App;
