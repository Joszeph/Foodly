import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
      <div className={styles.inputEl}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
        <input className={styles.search} type="text" />
      </div>
    </header>
  );
};

export default Header;
