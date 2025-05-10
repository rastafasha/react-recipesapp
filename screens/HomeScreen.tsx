import homeScreenStyles from '@/styles/homeScreenStyles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Recipe } from '../models/recipe';
type RootStackParamList = {
  Home: undefined;
  Detail: { recipeId: number; title: string; image: string };
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export const HomeScreen = () => {
  
  
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    const fetchRecipes = async () => {

      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            apiKey: "cb7b946c78e649cdaaf6567bd7413336",
            cuisine: "indian",
            number: 10,
            addRecipeInformation: true
          }
        },
        );
        console.log("data", response);
        const data = response.data.results.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          readyInMinutes: recipe.readyInMinutes,
          healthScore: recipe.healthScore,
          type:Math.random()>0.5 ? 'One-pot': 'Easy'
        }));
        setRecipes(data);
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);
  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <TouchableOpacity onPress={()=>
      navigation.navigate('Detail',{
      recipeId: item?.id,
      title:item?.title,
      image:item?.image,
    })
    } 
    style={styles.card} activeOpacity={0.8}>
        <View style={styles.typeBadge}>
          <Text>{item?.type}</Text>
        </View>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>{item?.readyInMinutes} min • {Math.round(item.healthScore)}</Text>
          <TouchableOpacity style={styles.bookmark}>
            <Text style={styles.bookmarkText}>Bookmark</Text>
          </TouchableOpacity>
      </TouchableOpacity>
  )
  return (
    <View style= {styles.container}>
      <View style= {styles.header}>
        <Text style= {styles.welcome}>Welcome to Tast App</Text>
        <Text style= {styles.subtitle}>Here is what we recipe</Text>
      </View>
      <FlatList data={recipes} 
      renderItem={renderRecipeCard}
      keyExtractor={item=>item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row} />
    </View>
  )
}


const styles = StyleSheet.create(homeScreenStyles)