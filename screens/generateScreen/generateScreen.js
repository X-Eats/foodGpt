import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import Header from '../../components/header';

const { width, height } = Dimensions.get('window');

const RestaurantDiscoveryScreen = () => {
  const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),

      // IntegralCF
      'IntegralCF': require('../../assets/fonts/IntegralCF/IntegralCF-Regular.otf'),
      'IntegralCF-Bold': require('../../assets/fonts/IntegralCF/IntegralCF-Bold.otf'),
      'IntegralCF-Medium': require('../../assets/fonts/IntegralCF/IntegralCF-Medium.otf'),
      'IntegralCF-SemiBold': require('../../assets/fonts/IntegralCF/IntegralCF-DemiBold.otf'),
  });

    if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }
  const [isPressed, setIsPressed] = useState(false);
  const [currentMeal, setCurrentMeal] = useState(null);

  // Array of meal recommendations
  const meals = [
    {
      id: 1,
      name: 'Chicken Magnum',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/ChickenCrunchy_6374623920638639884509795050.jpg',
    },
    {
      id: 2,
      name: 'Pizza Supreme',
      image: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 3,
      name: 'Burger Mashroom',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Sandwich Chicken Crispy',
      image: 'https://www.onceuponachef.com/images/2023/05/fried-chicken-sandwiches.jpg',
    },
    {
      id: 5,
      name: '1/4 Chicken',
      image: 'https://media.istockphoto.com/id/1391724292/photo/juicy-roast-chicken-legs-with-green-beans-salad.jpg?s=612x612&w=0&k=20&c=JrkFMOs2XcDHb1K5OYVHzPBRbqAULgE-wd8ok-nYlDs=',
    },
  ];

  const handleTapToGenerate = () => {
    setIsPressed(true);
    // Generate random meal recommendation
    setTimeout(() => {
      const randomMeal = meals[Math.floor(Math.random() * meals.length)];
      setCurrentMeal(randomMeal);
      setIsPressed(false);
    }, 500);
  };

  const handleGenerateAgain = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setCurrentMeal(randomMeal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
    <Header/>
      

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.greeting}>Hi Abdelrahman,</Text>
        <Text style={styles.greetingTitle}>Discover Restaurant</Text>

        {/* Main Content - Show either generate circle or meal recommendation */}
        {!currentMeal ? (
          // Tap to Generate Circle
          <TouchableOpacity
            style={[styles.generateCircle, isPressed && styles.generateCirclePressed]}
            onPress={handleTapToGenerate}
            activeOpacity={0.8}
          >
            <Text style={styles.generateText}>
              {isPressed ? 'GENERATING...' : 'Tap to\nGenerate !'}
            </Text>
          </TouchableOpacity>
        ) : (
          // Meal Recommendation Display
          <View style={styles.mealRecommendation}>
            <Image source={{ uri: currentMeal.image }} style={styles.mealImage} />
            <Text style={styles.mealDescription}>"Tap To Check Restaurants"</Text>
            
            <TouchableOpacity style={styles.mealButton}>
              <Text style={styles.mealButtonText}>{currentMeal.name}</Text>
            </TouchableOpacity>
            
            <Text style={styles.notFavoriteText}>Not Your Favorite ?</Text>
            
            <TouchableOpacity style={styles.generateAgainButton} onPress={handleGenerateAgain}>
              <Text style={styles.generateAgainText}>GENERATE AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* Bottom Section */}
      {!currentMeal && (
        <>
          <View style={styles.bottomSection}>
          <Text style={styles.bottomTitle}>What to Eat Today ?</Text>
            
          </View>
          <Text style={styles.bottomSubtitle}>
            Tap the meal to give you access to restaurants
          </Text>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 0,
    fontFamily: 'Poppins-Regular',
    fontWeight: '900',
  },
  greetingTitle: {
    fontSize: 24,
    color: '#000',
    marginBottom: 0,
    fontFamily: 'IntegralCF',
    marginBottom:47,
  },

  generateCircle: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    borderWidth: 4,
    borderColor: '#7ED321',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#7ED321',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 71,
  },
  generateCirclePressed: {
    transform: [{ scale: 0.95 }],
    shadowOpacity: 0.5,
  },
  generateText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    lineHeight: 32,
    fontFamily: 'IntegralCF-Medium', // Ensure this matches the font name loaded in useFonts
    letterSpacing:  1,

  },
  mealRecommendation: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  mealImage: {
    width: width * 0.8,
    height: width * 0.6,
    borderRadius: 20,
    marginBottom: 30,
    resizeMode: 'cover',
  },
  mealDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
  mealButton: {
    backgroundColor: '#000',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
    width: width * 0.8,
    alignItems: 'center',
  },
  mealButtonText: {
    color: '#7ED321',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  notFavoriteText: {
    textAlign:'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
  generateAgainButton: {
    backgroundColor: '#7ED321',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
  },
  generateAgainText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Integral',
    letterSpacing: -0.5,
  },
  bottomTitle: {
    fontSize: 16,
    color: '#7ED321',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    position: 'absolute', // Position it absolutely

    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: height * 0.2,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
  },
  bottomSubtitle: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    opacity: 0.8,
        marginBottom: 60,
  },
});

export default RestaurantDiscoveryScreen;