import dishDetailsScreenStyles from '@/styles/dishDetailsScreenStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet, Text
} from 'react-native';

type DishDetailParam ={
    DishDetail:{
        recipeId: number;
        title:string;
        image:string;
    }
};
interface RecipeDetail{
    id:number;
    title:string;
    image:string;
    extendedIngredients:{original: string}[];
    analyzedInstructions: {steps: {number:number,step:string}[]}[];
}

const API_URL = process.env.API_SPOONACULAR_URL;
const API_KEY: string | undefined = process.env.API_SPOONACULAR_KEY;

const DishDetailsScreen = () => {
    const route = useRoute<RouteProp<DishDetailParam,'DishDetail'>>();
    const {recipeId, title, image} = route.params;
    const [recipe, setRecipe] = useState<RecipeDetail| null>(null);
    const [loading, setLoading] = useState(false);

    
  

    useEffect(()=>{
        const fetchRecipeDetails = async () =>{
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=cb7b946c78e649cdaaf6567bd7413336`, {
                    params: {
                        includeNutrition: false,
                    }
                });
            } catch (error) {
                console.log("error",error);
            }finally{
                setLoading(false);
            }
        };
        fetchRecipeDetails();
    },[])

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri:image}} style={styles.image}></Image>
        <Text>DishDetailsScreen</Text>
        </ScrollView>
    )
}

export default DishDetailsScreen

const styles = StyleSheet.create(dishDetailsScreenStyles)