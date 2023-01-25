import Image from "next/image";
import styles from "../styles/Ingridients.module.css";

const Ingridients = ({ recipe }) => {
  const ingArr = recipe.ingridients.split(", ");

  return (
    <>
      {ingArr.map((ing) => (
        <div className={styles.ing} key={recipe.id}>
          <Image src="/img/finger.png" alt="" width={31} height={35} />
          <p>{ing}</p>
        </div>
      ))}
    </>
  );
};

export default Ingridients;
