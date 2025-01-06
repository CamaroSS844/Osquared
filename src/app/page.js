"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "./OverviewComponents/topNav";
import styles from "./page.module.css";

// import {  useAppDispatch } from "@/lib/hooks";
// import { initialize } from "@/lib/features/dataStorageSlice";
import StoreProvider from "../StoreProvider";

function Home() {

  return (
    <div className={styles.page}>
      <TopNav />
      <div className={styles.mainContent}>
        hello world
      </div>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}
