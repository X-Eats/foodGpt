import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../../components/header';

const XEatsWelcome = ({ navigation }) => {
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
  return (
    <View style={styles.container}>
    <Header/>

      <View style={styles.content}>
       

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeDescription}>
            Lorem Ipsum is simply dummy text of{'\n'}
            the printing and typesetting industry.
          </Text>
        </View>

        {/* Page Indicators */}
        <View style={styles.pageIndicators}>
          {/* ...existing code... */}
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('GenerateScreen')} // Navigate to GenerateScreen
        >
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcomeTitle: {
    fontSize: 18,
    fontFamily: 'IntegralCF-Bold', // Ensure Poppins-Bold is loaded
    color: '#000',
    marginBottom: 20,
    letterSpacing: 2,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
    fontFamily:'Poppins-Medium', // Ensure Poppins-Regular is loaded
  },
  pageIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 60,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333333',
  },
  activeDot: {
    backgroundColor: '#7ED321',
  },
  getStartedButton: {
    backgroundColor: '#7ED321',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
  },
  getStartedText: {
    fontSize: 16,
    fontFamily: 'IntegralCF', // Ensure IntegralCF-Bold is loaded
    color: '#000000',
  },
});

export default XEatsWelcome;