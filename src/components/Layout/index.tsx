import styles from "./Layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: JSX.Element;
}

function Layout({ children }: IProps) {
  return (
    <main className={styles.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
