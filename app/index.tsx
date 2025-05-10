import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabNavigator from "../navigation/AppNavigation";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomTabNavigator />
    </GestureHandlerRootView>
    // <SafeAreaProvider style={{ flex: 1 }}>
    //     <BottomTabNavigator></BottomTabNavigator>
    // </SafeAreaProvider>
  );
}
