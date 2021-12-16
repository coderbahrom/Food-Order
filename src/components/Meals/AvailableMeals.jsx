import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import axios from "axios";
import { useEffect, useState } from "react";
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    async function postData() {
      const response = await axios.get(
        "https://get-data-7ff95-default-rtdb.firebaseio.com/meals.json"
      );
      if (response.status !== 200) {
        throw new Error("Something wen wrong!");
      }
      const loadedMeals = [];
      for (const key in response.data) {
        loadedMeals.push({
          id: key,
          name: response.data[key].name,
          description: response.data[key].description,
          price: response.data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }
    postData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
