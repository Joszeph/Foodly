import { useState, useEffect } from "react";
import _ from "lodash";

import styles from "/styles/Home.module.css";
import Card from "/components/Card";
import Loading from "../components/Loading";

import { seaFood } from "../db/seafood";
import { italianFood } from "../db/italianfood";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NoResults } from "../components/NoResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredSeaFood, setFilteredSeaFood] = useState(seaFood);
  const [filteredItalianFood, setFilteredItalianFood] = useState(italianFood);
  const [isLoading, setIsLoading] = useState(false)
  const [showH2, setShowH2] = useState(true);
  const debouncedSearch = _.debounce((val) => setSearch(val), 1000);

  useEffect(() => {
    setIsLoading(true);
    setShowH2(false);
    const filteredSeaFoodData = seaFood.filter((val) => {
      if (search === "") {
        return val;
      } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
    const filteredItalianFoodData = italianFood.filter((val) => {
      if (search === "") {
        return val;
      } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
    setTimeout(() => {
      setFilteredSeaFood(filteredSeaFoodData);
      setFilteredItalianFood(filteredItalianFoodData);
      setIsLoading(false);
      setShowH2(true);
    }, 1000);
  }, [search]);

  return (
    <>
      <div className={styles.inputEl}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <input
          className={styles.search}
          type="text"
          onChange={(event) => {
            debouncedSearch(event.target.value);
          }}
        />
      </div>

      <main className={styles.mainContainer}>
        {isLoading ? <Loading /> : null}
        {filteredSeaFood.length > 0  ? (
          <>
            {showH2 ? (
              <>
                <h2>🌊 DOWN FOR seafood tonight?</h2>
                <section className={styles.cardsWrapperOne}>
                  {filteredSeaFood.map((food) => (
                    <Card food={food} key={food.id} />
                  ))}
                </section>
                <h2>🍝 MAYBE some italian?</h2>
                <section className={styles.cardsWrapperTwo}>
                  {filteredItalianFood.map((food) => (
                    <Card food={food} key={food.id} />
                  ))}
                </section>
              </>
            ) : null}
          </>
        ) : (
          <NoResults search={search}/>
        )}
      </main>
    </>
  );
}

