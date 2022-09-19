import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <SearchBar />
    </div>
  );
}
