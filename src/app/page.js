import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a custom homepage. Start building your app here!</p>
      </main>
    </div>
  );
}