import styles from "../styles/Loading.module.css";
import Link from 'next/link'

export const NoResults = ({search}) => {
  return (
    <div className={styles.loader}>
      <p className={styles.loaderP}>
        No results found for “{search}”. <strong>How about some burgers?</strong>{" "}
      </p>
      <Link href="/">
        <button>Yeah, sure</button>
      </Link>
    </div>
  );
};
