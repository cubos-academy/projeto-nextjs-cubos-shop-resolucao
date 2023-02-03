import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>MODA MASCULINA</h1>
        <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
      </div>
      <img src="/logo.svg" alt="logo" />
    </header>
  );
}

export default Header;
