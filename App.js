import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/splashScreen/splashScreen';
import WelcomeScreen from './screens/welcomeScreen/welcomeScreen';
import GenerateScreen from './screens/generateScreen/generateScreen';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Renamed to fontsLoaded for clarity

  useEffect(() => {
    Font.loadAsync({
      // Poppins
      'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),

      // IntegralCF
      'IntegralCF': require('./assets/fonts/IntegralCF/IntegralCF-Regular.otf'),
      'IntegralCF-Bold': require('./assets/fonts/IntegralCF/IntegralCF-Bold.otf'),
      'IntegralCF-Medium': require('./assets/fonts/IntegralCF/IntegralCF-Medium.otf'),
      'IntegralCF-SemiBold': require('./assets/fonts/IntegralCF/IntegralCF-DemiBold.otf'),
    }).then(() => setFontsLoaded(true)); // Updated to setFontsLoaded
  }, []);

  if (!fontsLoaded) return null; // Updated to use fontsLoaded

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GenerateScreen" component={GenerateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}