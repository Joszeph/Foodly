import React from 'react'
import Image from 'next/image'

import styles from '../styles/Recipe.module.css'

import Ingridients from './Ingridients'

const RecipeDetails = ({recipeId}) => {

// const tagArr = recipeId.tags.split(", ")

  return (
    <div className={styles.modalContainer}>
    <div className={styles.titleImg}>
      <div className={styles.img}>
        <Image
          src={recipeId.image}
          alt=""
          width={441.81}
          height={417}
        />
      </div>
      <div className={styles.title}>
        <h1>{recipeId.title}</h1>
        <button className={styles.btnVideo}>
          <Image
            src="/svg/icon-play.svg"
            alt="icon-play"
            width={29}
            height={29}
          />
          <span> PLAY VIDEO</span>
        </button>
      </div>
    </div>
    <div className={styles.modalContent}>
      <div className={styles.left}>
        <h5>Ingridients</h5>
        <Ingridients recipe={recipeId}/>
      </div>
      <div className={styles.right}>
        <h5>Instructions</h5>
        <p>
          {recipeId.content}
        </p>
        {/* <div className={styles.tags}>
          {tagArr.map((tag) =>(
            <div className={styles.tag} key={tag.id}>
            <span>{tag}</span>
          </div>
          ))}
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default RecipeDetails