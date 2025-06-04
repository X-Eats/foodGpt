import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/splashScreen/splashScreen';
import WelcomeScreen from './screens/welcomeScreen/welcomeScreen';
import GenerateScreen from './screens/generateScreen/generateScreen';
import MealResultScreen from './screens/mealResultScreen/mealResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GenerateScreen" component={GenerateScreen} />
        <Stack.Screen name="MealResultScreen" component={MealResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}