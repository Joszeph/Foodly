import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Image
        className={styles.logo}
        src="/svg/logo.svg"
        alt="Foodly Logo"
        width={388.39}
        height={265}
      />
    
    </header>
  );
};

export default Header;
