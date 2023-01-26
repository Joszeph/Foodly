import { useRouter } from "next/router";

import Link from "next/link";
import Modal from "react-modal";
import styles from "/styles/Home.module.css";
import Card from "/components/Card";
import RecipeDetails from "../components/RecipeDetails";

import { seaFood } from "../db/seafood";
import { italianFood } from "../db/italianfood";

Modal.setAppElement("#__next");

export default function Home() {
  
  const router = useRouter();

  return (
    <>
      <main className={styles.mainContainer}>
        <h2>🌊 DOWN FOR seafood tonight?</h2>
        {/* <section className={styles.cardsWrapperOne}>
          {seaFood.map((food) => (
            <Link
              href={`/recipe/[recipeId]`}
              as={`/recipe/${food.id}`}
              key={food.id}
            >
              <Card food={food} />
            </Link>
          ))}
        </section> */}
        <h2>🍝 MAYBE some italian?</h2>
        <section className={styles.cardsWrapperTwo}>
          {italianFood.map((recipe) => (
            <Link
              href={`/?recipeId=${recipe}`}
              as={`/recipe/${recipe.id}`}
              key={recipe.id}
            >
              <Card recipe={recipe} key={recipe.id} />
            </Link>
          ))}
        </section>
        <Modal isOpen={!!router.query.recipeId}>
        <RecipeDetails recipeId={router.query.recipeId}/>
        </Modal>
      </main>
    </>
  );
}
