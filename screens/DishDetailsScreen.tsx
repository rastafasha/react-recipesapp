import dishDetailsScreenStyles from '@/styles/dishDetailsScreenStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet, Text, TouchableOpacity, View
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
    console.log(recipe);

    useEffect(()=>{
        const fetchRecipeDetails = async () =>{
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=cb7b946c78e649cdaaf6567bd7413336`, {
                    params: {
                        includeNutrition: false,
                    }
                });
                setRecipe(response.data);
            } catch (error) {
                console.log("error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipeDetails();
    },[])

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri:image}} style={styles.image}></Image>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                {recipe?.extendedIngredients?.map((ingredient: any, index: number) => (
                    <Text key={index} style={styles.sectionInfo}>{ingredient.original}</Text>
                ))}
            </View>
            <View style={styles.section}> 
                <Text style={styles.sectionTitle}>Steps</Text>
                {recipe?.analyzedInstructions[0]?.steps.map((step: any, index: number) => {
                    return (
                        <View key={index} style={styles.step}>
                            <Text style={styles.stepNumber}>Step {step.number}</Text>
                            <Text style={styles.stepText}>{step.step}</Text>
                        </View>
                    );
                })}
            </View>
            <TouchableOpacity style={styles.startbutton}>
                <Text style={styles.startButtonText}>Start Cooking</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DishDetailsScreen

const styles = StyleSheet.create(dishDetailsScreenStyles)