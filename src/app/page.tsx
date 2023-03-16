import Image from "next/image";
import styles from "./page.module.css";
import RouteButton from "./RouteButton";

export const metadata = {
  title: "Home",
  description: "Yes",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="https://media.tenor.com/GIVLitDIxr8AAAAM/breaking-bad-walter-white.gif"
        alt="Jesse we need to cook"
        width={500}
        height={500}
      />
      <RouteButton />
    </main>
  );
}
