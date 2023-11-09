import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals(){
const [loadedMeals, setLoadedMeals] = useState([]);    
    
useEffect(() =>{
    async function fetchMeals(){
        const response = await fetch('http://localhost:3000/meals',{method:'GET'});
        if(!response.ok){
        ///...
    }

    const meals = await response.json();//convert from json to javascript object///return a promises 
    setLoadedMeals(meals);
}
fetchMeals();
},[]);
   
    return (
        <ul id="meals">{loadedMeals.map(meal => 
            <MealItem key={meal.id} meal={meal}/>
            )}
        </ul>
    );
}