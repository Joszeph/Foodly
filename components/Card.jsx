import styles from "../styles/Card.module.css";
import Image from "next/image";

const Card = ({ recipe }) => {
  const tagArr = recipe.tags.split(", ");

  return (
    <div className={styles.cardContainer}>
      <Image src={recipe.image} alt="" width={315} height={271} />
      <h5>{recipe.title}</h5>
      <div className={styles.tags}>
        {tagArr.map((tag) => (
          <div className={styles.tag} key={recipe.id}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
