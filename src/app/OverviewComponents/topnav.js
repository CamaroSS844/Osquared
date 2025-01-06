import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function TopNav() {

    return (
        <header className={styles.header}>
        <div style={{ display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <span>Logo</span>
          <h3>O Squared</h3>
        </div>
        <div className={styles.navbar}>
          <Link
            className={styles.navAnchor}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >Home</Link>
          <Link
            className={styles.navAnchor}
            href="/Machines"
            target="_blank"
            rel="noopener noreferrer"
          >About</Link>
          <Link
            className={styles.navAnchor}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >Contact</Link>
        </div>
      </header>
    )
}