import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';


const RestaurantDiscovery = ({ navigation }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [fontsLoaded] = useFonts({
      'Poppins-Bold': require('../.././assets/fonts/Secondary Font - Poppins/Poppins-Bold.ttf'),
    });
    if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }


  const restaurants = [
    'McDonald\'s',
    'KFC',
    'Pizza Hut',
    'Subway',
    'Burger King',
    'Domino\'s Pizza',
    'Taco Bell',
    'Starbucks',
    'Papa John\'s',
    'Wendy\'s'
  ];

  const handleGenerateRestaurant = () => {
    setIsGenerating(true);
    
    // Simulate loading
    setTimeout(() => {
      const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
      setIsGenerating(false);
      navigation.navigate('MealResultScreen', { restaurant: randomRestaurant }); // Navigate to MealResultScreen
    }, 1000);
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
          <Text style={styles.xLogo}>X</Text>
          <Text style={styles.eatsText}>eats</Text>
          <Text style={styles.trademark}>®</Text>
        </View>
        <Text style={styles.location}>Haram, Giza</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.greeting}>Hi Abdelrahman,</Text>
        <Text style={styles.title}>Discover Your Meal</Text>

        {/* Interactive Box */}
        <TouchableOpacity 
          style={styles.diceContainer} 
          onPress={handleGenerateRestaurant}
          activeOpacity={0.8}
          disabled={isGenerating} // Disable button while loading
        >
          <View style={styles.diceBox}>
            {isGenerating ? (
              <Text style={styles.generateTitle}>Generating...</Text>
            ) : (
              <>
                <Text style={styles.generateTitle}>Generate Random Meal</Text>
                <Text style={styles.generateSubtitle}>
                  Discover What You&apos;ll Eat Today X eater
                </Text>
              </>
            )}
          </View>
        </TouchableOpacity>

        <Text style={styles.instruction}>
          Tap the generator above to discover your next meal!
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
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
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7ED321',
  },
  eatsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 2,
  },
  trademark: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: -10,
  },
  location: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  diceContainer: {
    marginBottom: 30,
  },
  diceBox: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#7ED321',
    padding: 30,
    alignItems: 'center',
    minHeight: 300,
    justifyContent: 'center',
  },
  dicesContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  dice: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  dice2: {
    transform: [{ rotate: '15deg' }],
  },
  diceAnimating: {
    transform: [{ rotate: '45deg' }, { scale: 1.1 }],
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#000000',
    borderRadius: 4,
    position: 'absolute',
  },
  dot1: { top: 10, left: 10 },
  dot2: { top: 10, right: 10 },
  dot3: { top: 26, left: 26 },
  dot4: { bottom: 10, left: 10 },
  dot5: { bottom: 10, right: 10 },
  dot6: { bottom: 26, right: 26 },
  generateTitle: {
    color: '#7ef900',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  generateSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  instruction: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#333333',
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

export default RestaurantDiscovery;