import DishDetailsScreen from '@/screens/DishDetailsScreen';
import MealPlanDetailScreen from '@/screens/MealPlanDetailScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CommunityScreen } from '../screens/CommunityScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MealPlanScreen } from '../screens/MealPlanScreen';
import { ProfileScreen } from '../screens/ProfileScreen';


type TabParamList = {
    Discover: undefined;
    Community: undefined;
    MealPlan: undefined;
    Profile: undefined;
};
const Tab = createBottomTabNavigator();
const DiscoverStack = createBottomTabNavigator();
const CommunityStack = createBottomTabNavigator();
const MealPlanStack = createBottomTabNavigator();
const AuthStack = createBottomTabNavigator();

const DiscoverStackScreen = () => {
    return (
        <DiscoverStack.Navigator screenOptions={{headerShown:false}}>
            <DiscoverStack.Screen name='Home' component={HomeScreen} />
            <DiscoverStack.Screen name='Detail' component={DishDetailsScreen} />
        </DiscoverStack.Navigator>
    );
}

const CommunityStackScreen = () => {
    return (
        <CommunityStack.Navigator screenOptions={{headerShown:false}}>
            <CommunityStack.Screen name='Community' component={CommunityScreen} />
        </CommunityStack.Navigator>
    );
}

const MealPlanStackScreen = () => {
    return (
        <MealPlanStack.Navigator screenOptions={{headerShown:false}}>
            <MealPlanStack.Screen name='Meal' component={MealPlanScreen} />
            <MealPlanStack.Screen name='MealPlanDetail' component={MealPlanDetailScreen} />
        </MealPlanStack.Navigator>
    );
}
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name='Profile' component={ProfileScreen} />
        </AuthStack.Navigator>
    );
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => {
            const getIconName = (routeName: keyof TabParamList, focused: boolean) => {
                if (routeName === 'Discover') {
                    return focused ? 'search' : 'search-outline';
                } else if (routeName === 'Community') {
                    return focused ? 'people' : 'people-outline';
                } else if (routeName === 'MealPlan') {
                    return focused ? 'calendar' : 'calendar-outline';
                } else if (routeName === 'Profile') {
                    return focused ? 'person' : 'person-outline';
                }
                return 'help';
            };

            return {
                tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
                    const iconName = getIconName(route.name as keyof TabParamList, focused);
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007aff',
                tabBarInactiveTintColor: '#666',
                headerShown: false,
                // tabBarStyle: { display: 'none' },
            };



        }}>
            <Tab.Screen name='Discover' component={DiscoverStackScreen} />
            <Tab.Screen name='Community' component={CommunityStackScreen} />
            <Tab.Screen name='MealPlan' component={MealPlanStackScreen} />
            <Tab.Screen name='Profile' component={AuthStackScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({})