import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Header = ({ location = "Haram, Giza", showLocation = true }) => {
      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'IntegralCF': require('../assets/fonts/IntegralCF/IntegralCF-Regular.otf'),
      });
        if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }
  return (
       <View style={styles.header}>
           <Image
             source={require('../assets/images/Official_Logo.png')} // Updated to use Official_Logo.png
             style={styles.logoImage}
           />
         <View style={styles.locationContainer}>
          <Ionicons name="location" size={20} color="#7ef900" />
           <Text style={styles.locationText}>{location}</Text>
         </View>
       </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 50,
        marginTop: 40,
  },
    logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 40,
  },

  locationText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // You'll need to load this font
  },
});

export default Header;