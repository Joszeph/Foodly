import styles from '/styles/Home.module.css'
import Card from '/components/Card'

import {seaFood} from '../db/seafood'
import { italianFood } from '../db/italianfood'


export default function Home() {

  return (
    <>
      <main className={styles.mainContainer}>
        <h2>🌊 DOWN FOR seafood tonight?</h2>
        <section className={styles.cardsWrapperOne}>
          {seaFood.map((food)=>(
            <Card food={food} key={food.id}/>
          ))}
        </section>
        <h2>🍝 MAYBE some italian?</h2>
        <section className={styles.cardsWrapperTwo}>
        {italianFood.map((food)=>(
            <Card food={food} key={food.id}/>
          ))}
        </section>
      </main>
    </>
  )
}
