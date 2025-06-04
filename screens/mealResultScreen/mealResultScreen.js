import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';

const RestaurantResult = ({ navigation }) => {
  const [currentFood, setCurrentFood] = useState('Burger');
  const [isGenerating, setIsGenerating] = useState(false);

  const foodOptions = [
    { name: 'Burger', emoji: '🍔', description: 'WOW ! Our FoodGpt Suggested to you to try the most delicious burger restaurants.' },
    { name: 'Pizza', emoji: '🍕', description: 'Amazing ! Our FoodGpt suggests trying the best pizza places in your area.' },
    { name: 'Sushi', emoji: '🍣', description: 'Excellent ! Our FoodGpt recommends the finest sushi restaurants for you.' },
    { name: 'Tacos', emoji: '🌮', description: 'Great ! Our FoodGpt found the most authentic taco spots just for you.' },
    { name: 'Pasta', emoji: '🍝', description: 'Perfect ! Our FoodGpt suggests the best Italian pasta restaurants.' },
    { name: 'Chicken', emoji: '🍗', description: 'Wonderful ! Our FoodGpt recommends the most delicious fried chicken places.' },
  ];

  const handleGenerateAgain = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
      setCurrentFood(randomFood.name);
      setIsGenerating(false);
    }, 1500);
  };

  const getCurrentFood = () => {
    return foodOptions.find(food => food.name === currentFood);
  };

  const handleNavigateToMealResult = () => {
    navigation.navigate('MealResultScreen', { restaurant: currentFood });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBars}>
            <View style={[styles.bar, styles.bar1]} />
            <View style={[styles.bar, styles.bar2]} />
            <View style={[styles.bar, styles.bar3]} />
            <View style={[styles.bar, styles.bar4]} />
          </View>
          <View style={styles.wifi} />
          <View style={styles.battery} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/Official_Logo.png')} // Updated to use Official_Logo.png
            style={styles.logoImage}
          />
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationDot}>📍</Text>
          <Text style={styles.location}>Haram, Giza</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.greeting}>Hi Abdelrahman,</Text>
        <Text style={styles.title}>Discover Your Meal</Text>

        {/* Food Image Container */}
        <View style={styles.foodContainer}>
          <View style={styles.foodImageContainer}>
            <Text style={styles.foodEmoji}>{getCurrentFood()?.emoji}</Text>
          </View>
          
          <Text style={styles.foodDescription}>
            {getCurrentFood()?.description}
          </Text>
        </View>

        {/* Food Type Display */}
        <View style={styles.foodTypeContainer}>
          <Text style={styles.foodType}>{currentFood}</Text>
        </View>

        {/* Generate Again Button */}
        <TouchableOpacity 
          style={styles.generateButton} 
          onPress={handleGenerateAgain}
          disabled={isGenerating}
        >
          <Text style={styles.diceEmoji}>🎲</Text>
          <Text style={styles.generateButtonText}>
            {isGenerating ? 'GENERATING...' : 'GENERATE AGAIN'}
          </Text>
          <Text style={styles.diceEmoji}>🎲</Text>
        </TouchableOpacity>

        {/* Navigate to Meal Result Screen Button */}
        <TouchableOpacity 
          style={styles.navigateButton} 
          onPress={handleNavigateToMealResult}
        >
          <Text style={styles.navigateButtonText}>VIEW RESTAURANTS</Text>
        </TouchableOpacity>

        <Text style={styles.instruction}>
          Tap the meal to give you access nearby restaurants
        </Text>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>X</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>ⓘ</Text>
          <Text style={styles.navLabel}>About Us</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🍽</Text>
          <Text style={styles.navLabel}>Liked Restaurants</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#000000',
  },
  time: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#FFFFFF',
    width: 3,
  },
  bar1: { height: 4 },
  bar2: { height: 6 },
  bar3: { height: 8 },
  bar4: { height: 10 },
  wifi: {
    width: 15,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  battery: {
    width: 24,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#000000',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 110,
    height: 60,
    resizeMode: 'contain',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDot: {
    fontSize: 12,
    marginRight: 4,
  },
  location: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  foodContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  foodImageContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  foodEmoji: {
    fontSize: 120,
  },
  foodDescription: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  foodTypeContainer: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  foodType: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#7ED321',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  diceEmoji: {
    fontSize: 20,
  },
  generateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  navigateButton: {
    backgroundColor: '#7ED321',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  navigateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  instruction: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#000000',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: '#666666',
    marginBottom: 4,
  },
  activeNavIcon: {
    color: '#7ED321',
  },
  navLabel: {
    fontSize: 12,
    color: '#666666',
  },
  activeNavLabel: {
    color: '#7ED321',
  },
});

export default RestaurantResult;