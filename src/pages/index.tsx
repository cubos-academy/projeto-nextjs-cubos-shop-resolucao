import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles["container-main"]}></div>

      <Footer />
    </div>
  );
}
