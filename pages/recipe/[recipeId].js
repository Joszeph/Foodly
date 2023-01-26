import { useRouter } from "next/router";

import Modal from "react-modal";
import RecipeDetails from "../../components/RecipeDetails";

import styles from "../../styles/Recipe.module.css";

import { seaFood } from "../../db/seafood";

// export async function getStaticPaths() {
//   const paths = Object.keys(seaFood).map((id) => ({
//     params: { recipeId: id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const recipe = seaFood[params.recipeId];

//   return {
//     props: { recipe },
//   };
// }

const Recipe = () => {
  const router = useRouter();
  const {recipeId} = router.query

  return (
      <RecipeDetails recipeId={recipeId} />
  );
};

export default Recipe;
