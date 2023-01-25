import { useRouter } from "next/router";

import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
import RecipeDetails from '../components/RecipeDetails'
import Modal from '../components/Modal'

const Card = ({ food }) => {
  let router = useRouter();

  const tagArr = food.tags.split(", ");

  return (
    <>
      {router.query.image && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <RecipeDetails image={router.query.image} />
        </Modal>
      )}
      <Link href={`/recipe/[recipeId]`} as={`/recipe/${food.id}`}>
        <div className={styles.cardContainer}>
          <Image src={food.image} alt="" width={315} height={271} />
          <h5>{food.title}</h5>
          <div className={styles.tags}>
            {tagArr.map((tag) => (
              <div className={styles.tag} key={food.id}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
