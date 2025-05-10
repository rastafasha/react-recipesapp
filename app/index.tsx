import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigator from "../navigation/AppNavigation";

export default function Index() {
  return (
    // <View style={{ flex: 1 }}>
    //   <BottomTabNavigator />
    // </View>
    <SafeAreaProvider style={{ flex: 1 }}>
        <BottomTabNavigator></BottomTabNavigator>
    </SafeAreaProvider>
  );
}
