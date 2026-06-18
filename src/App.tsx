import { useState } from 'react';
import momPhoto from './mom.jpg';
function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={styles.container}>
      {/* CSS Keyframe Animations Injection */}
      <style>{inlineStyles}</style>

      {/* Floating Decorative Balloons */}
      <div style={{ ...styles.balloon, ...styles.balloon1 }}>🎈</div>
      <div style={{ ...styles.balloon, ...styles.balloon2 }}>🎈</div>
      <div style={{ ...styles.balloon, ...styles.balloon3 }}>🎈</div>

      {!showMessage ? (
        <div style={styles.buttonWrapper}>
          <button style={styles.button} onClick={() => setShowMessage(true)}>
            Click Here for a Surprise!
          </button>
        </div>
      ) : (
        <div style={styles.card}>
    {/* Updated Image Tag using the imported asset */}
    <img 
    src={momPhoto} 
    alt="Mom" 
    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', border: '4px solid #ff69b4' }} 
  />


          {/* Confetti Elements */}
          <div style={styles.confettiContainer}>
            {[...Array(15)].map((_, i) => (
              <span key={i} style={{ ...styles.confettiPiece, ...getRandomConfettiStyle(i) }} />
            ))}
          </div>
          
          <h1 style={styles.heading}>Happy Birthday, Mom!</h1>
          <p style={styles.message}>
            I made this baby project to wish you a happy birthday!
            <br />
            Thank you for everything you do for us and for being the best mom in the world. 
            <br />
            I hope you have a wonderful day today! 
          </p>
        </div>
      )}
    </div>
  );
}

// Helper to randomize the confetti explosion
const getRandomConfettiStyle = (index: number): React.CSSProperties => {
  const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffd700', '#00e5ff', '#7fff00'];
  return {
    backgroundColor: colors[index % colors.length],
    transform: `rotate(${Math.random() * 360}deg)`,
    left: `${20 + Math.random() * 60}%`,
    top: `${20 + Math.random() * 40}%`,
    animationDelay: `${index * 0.05}s`,
  };
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff0f5', 
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative',
  },
  buttonWrapper: {
    animation: 'pulse 2s infinite',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: 'white',
    padding: '20px 45px',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0px 8px 20px rgba(255, 105, 180, 0.4)',
    transition: 'transform 0.2s ease, background-color 0.2s',
  },
  card: {
    backgroundColor: 'white',
    padding: '50px 40px',
    borderRadius: '24px',
    textAlign: 'center',
    maxWidth: '480px',
    margin: '0 20px',
    boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    animation: 'popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  },
  heading: {
    color: '#ff1493',
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  message: {
    color: '#444',
    fontSize: '1.05rem',
    lineHeight: '1.7',
  },
  balloon: {
    position: 'absolute',
    fontSize: '3rem',
    bottom: '-10%',
    animation: 'floatUp 8s linear infinite',
    opacity: 0.6,
  },
  balloon1: { left: '10%', animationDuration: '9s' },
  balloon2: { left: '50%', animationDuration: '12s', animationDelay: '2s' },
  balloon3: { left: '85%', animationDuration: '7s', animationDelay: '4s' },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  confettiPiece: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    opacity: 0,
    animation: 'explode 1.2s ease-out forwards',
  },
};

// Pure CSS animations injected into the page
const inlineStyles = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  @keyframes popIn {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes floatUp {
    0% { transform: translateY(0) rotate(0deg); bottom: -10%; }
    100% { transform: translateY(-120vh) rotate(20deg); }
  }
  @keyframes explode {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { 
      transform: translate(calc(var(--x, 1) * (Math.random() - 0.5) * 300px), calc(var(--y, 1) * (Math.random() - 0.5) * 300px)) scale(0.5); 
      opacity: 0; 
    }
  }
  button:hover {
    background-color: '#ff1493' !important;
    transform: translateY(-3px);
  }
`;

export default App;
