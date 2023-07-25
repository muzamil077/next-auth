import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashborad from "./Dashboard";
import { useRouter } from "next/router";
import ProductCard from "@/components/Pcard";


const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <ProductCard />
        <Dashborad />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/architecture.png"
                  alt="book"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.cardContent}>
                <h2>Computer Programming Cookbook</h2>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <a
                    className={styles.btn}
                    href="https://nextjs.org/docs"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
