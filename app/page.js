'use client';

import Image from "next/image";
import styles from "./page.module.css";

import { useAuth } from './context/AuthContext';
import Login from './login';

export default function Home() {
  const { user, logOut } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <p>You are signed in with {user.email}</p>
          <button 
            onClick={logOut}
            style={{
              padding: '0.5rem 1rem',
              marginTop: '1rem',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Your Profile</h2>
          <p>View and manage your account settings</p>
        </div>

        <div className={styles.card}>
          <h2>Dashboard</h2>
          <p>View your activity and statistics</p>
        </div>

        <div className={styles.card}>
          <h2>Messages</h2>
          <p>Check your inbox and communications</p>
        </div>

        <div className={styles.card}>
          <h2>Settings</h2>
          <p>Customize your preferences and notifications</p>
        </div>
      </div>
    </main>
  );
}