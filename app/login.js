'use client';

import { useAuth } from './context/AuthContext';
import styles from './login.module.css';

export default function Login() {
  const { signIn } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome!</h1>
      <p className={styles.subtitle}>Please sign in to continue</p>
      <button 
        className={styles.signInButton}
        onClick={signIn}
      >
        <img 
          src="/google-icon.svg" 
          alt="Google"
          className={styles.googleIcon}
        />
        Sign in with Google
      </button>
    </div>
  );
}