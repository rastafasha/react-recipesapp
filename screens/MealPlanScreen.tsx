import meatPlanScreenStyles from "@/styles/mealPlanScreenStyles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const MealPlanScreen = () => {
  const navigation = useNavigation();
  const [mealPlan, setMealPlan] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  console.log(mealPlan);
  useEffect(() => {
    const fetchMealPlan = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              apiKey: "cb7b946c78e649cdaaf6567bd7413336",
            },
          }
        );
        const recipes = response.data.results;
        const plans = [
          {
            name: "Focus infiber",
            recipes: recipes.slice(0, 4).map((r: any) => ({
              id: r.id,
              title: r.title,
              image: r.image,
            })),
          },
          {
            name: "Spring Holidays Made Simple",
            recipes: recipes.slice(4, 7).map((r: any) => ({
              id: r.id,
              title: r.title,
              image: r.image,
            })),
          },
          {
            name: "One Pot No-Stress Cooking",
            recipes: recipes.slice(7, 11).map((r: any) => ({
              id: r.id,
              title: r.title,
              image: r.image,
            })),
          },
          {
            name: "More Meal Plans",
            recipes: recipes.slice(11, 13).map((r: any) => ({
              id: r.id,
              title: r.title,
              image: r.image,
            })),
          },
        ];
        setMealPlan(plans);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealPlan();
    
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
          }}
          style={styles.headerImage}
        ></Image>
        <View style={styles.headerText}>
          <Text style={styles.unlockText}>Unlock all of Meal Plans</Text>
          <Text style={styles.createText}>
            Create your own plans and see the full library of Tasty plans with
            Tasty +
          </Text>
        </View>
      </View>
      <View style={styles.collageContainer}>
          <Image 
          source={{uri:'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg'}}
          style={styles.collageImage}/>
          <Image 
          source={{uri:'https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y24_R16_W42_ES_ESSGP30616-2_Main__edit_meat_high-a670615d.jpg'}}
          style={styles.collageImage}/>
          {/* <Image 
          source={{uri:'https://www.cocinacaserayfacil.net/wp-content/uploads/2019/01/Recetas-faciles-y-sanas.jpg'}}
          style={styles.collageImage}/> */}
          <View style={styles.recipesBadge}>
            <Text style={styles.recipesBadgeText}> 4 recipes</Text>
          </View>
      </View>
      <Text style={styles.mealTitle}>Meal Plans</Text>
      {mealPlan?.map((plan:any, index:number)=>(
        <TouchableOpacity key={index} style={styles.planCard}>
          <Image 
            style={styles.planImage} 
            source={{uri: plan.recipes[0] ? plan.recipes[0].image : 'https://via.placeholder.com/150'}}
          />
          <View style={styles.planInfo}>
            <Text style={styles.planName}>{plan.name}</Text>
            <Text style={styles.planCount}>{plan.recipes.length} recipes</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start meal plans with these recipes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create(meatPlanScreenStyles);
