import Image from "next/image";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <Image
        className={styles.image}
        src="/img/Group.png"
        alt=""
        width={294}
        height={87}
      />
      <p>Searching for delicious food! <srtrong>Yum!</srtrong> 😋</p>
    </div>
  );
};

export default Loading;
