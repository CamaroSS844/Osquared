"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TopNav from "./OverviewComponents/topnav";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  // Function to navigate to the game page
  const handlePlayGameClick = () => {
    router.push("/game");
  };

  return (
    <div className={styles.page}>
      <TopNav className={styles.header}/>
      <div className={styles.mainContent}>
        {/* Welcome Section */}
        <div className={styles.textSection}>
          <h1>Welcome to Online Odyssey(O squared)!</h1>
          <p>
            Online Odyssey is an exciting and interactive game designed to teach children 
            the importance of cyber security in a fun and engaging way! Through challenges, 
            puzzles, and mini-games, kids will learn how to stay safe online, protect 
            their personal information, and become cyber security champions.
          </p>
          <p>
            Join us on this adventure and help your kids develop essential skills for the 
            digital age. Let’s make learning about online safety both educational and entertaining!
          </p>

          {/* Play Game Button */}
          <button onClick={handlePlayGameClick} className={styles.playButton}>
            Play the Game
          </button>
        </div>

        {/* Image Placeholder */}
        <div className={styles.imageSection}>
          
          <div className={styles.imagePlaceholder}>
          <Image
            src="/guyMessaging.png"
            alt="Game Image Placeholder"
            width={300}
            height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
