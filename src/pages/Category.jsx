import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

export function Category(){
    const {name}= useParams();
    const [meals , setMeals] = useState([]);
        getFilteredCategory(name).then(data => setMeals(data.meals))
    useEffect(()=>{},[name]);

    return <>
        {!meals.length ? <Preloader/> : <MealList meals = {meals}/> }
    </>
}