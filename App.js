import React, { useState } from "react";
import Home from "./components/main/Home";
import LoginPage from "./components/login/login";
// import Beginner from "./components/beginner/beginner.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import advanced from "./components/advanced/advanced.js";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
