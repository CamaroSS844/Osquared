"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"

export default function GameRooms() {
  const router = useRouter();

  const handleRoomClick = (room) => {
    router.push(`/choiceRoom/ChatRoom`);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Choose Your Gaming Room</h1>
      <div className={styles.tileContainer}>
        {/* Room 1 */}
        <div
          className={styles.tile}
          onClick={() => handleRoomClick("GameRoom")}
        >
          <h2>Chat Room 1</h2>
          <p>Peter</p>
        </div>

        {/* Room 2 */}
        <div
          className={styles.tile}
          onClick={() => handleRoomClick("room2")}
        >
          <h2>Chat Room 2</h2>
          <p>Emily</p>
        </div>

        {/* Room 3 */}
        <div
          className={styles.tile}
          onClick={() => handleRoomClick("room3")}
        >
          <h2>Chat Room 3</h2>
          <p>James</p>
        </div>
      </div>
    </div>
  );
}
