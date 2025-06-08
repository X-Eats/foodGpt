import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles/styles';

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'IntegralCF': require('../../assets/fonts/IntegralCF/IntegralCF-Regular.otf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); // Navigate to Welcome screen
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconBackground}>
          <View style={styles.iconContent}>
            <Image
              source={require('../.././assets/images/Official_Icon.png')}
              style={styles.logoImage}
            />
          </View>
        </View>
        <Text style={styles.appName}>FoodGpt V.0.0.1</Text>
      </View>
    </View>
  );
};

export default SplashScreen;