"use client"
import Image from "next/image";
import styles from "./page.module.css";
import EditProfile from "@/components/edit-profile/edit-profile";

export default function Home() {
  return (
    <main>
      <EditProfile></EditProfile>
    </main>
   
  );
}
