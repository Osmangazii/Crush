import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen() {
  const handleLogin = () => {
    Alert.alert('Login', 'Login functionality will be implemented', [
      { text: 'OK', onPress: () => router.replace('/(tabs)/home') }
    ]);
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section with Gradient Background */}
      <LinearGradient
        colors={['#FFB6C1', '#DDA0DD', '#E6E6FA']}
        style={styles.headerSection}
      >
        <View style={styles.iconContainer}>
          {/* Decorative Elements */}
          <View style={[styles.decorativeElement, styles.swirl1]}>
            <IconSymbol name="star.fill" size={18} color="#FFB6C1" />
          </View>
          <View style={[styles.decorativeElement, styles.heart1]}>
            <IconSymbol name="heart.fill" size={20} color="#FF69B4" />
          </View>
          <View style={[styles.decorativeElement, styles.lollipop1]}>
            <IconSymbol name="star.fill" size={16} color="#FFB6C1" />
          </View>
          <View style={[styles.decorativeElement, styles.flower1]}>
            <IconSymbol name="leaf.fill" size={14} color="#98FB98" />
          </View>
          <View style={[styles.decorativeElement, styles.heart2]}>
            <IconSymbol name="heart.fill" size={18} color="#FF69B4" />
          </View>
          <View style={[styles.decorativeElement, styles.flower2]}>
            <IconSymbol name="leaf.fill" size={16} color="#98FB98" />
          </View>
          <View style={[styles.decorativeElement, styles.star]}>
            <IconSymbol name="star.fill" size={16} color="#FFB6C1" />
          </View>
          <View style={[styles.decorativeElement, styles.lollipop2]}>
            <IconSymbol name="star.fill" size={18} color="#FFB6C1" />
          </View>
          
          {/* Main Dollar Sign Icon */}
          <View style={styles.dollarIconContainer}>
            <Text style={styles.dollarSign}>$</Text>
          </View>
        </View>
        
        {/* Crush Title */}
        <Text style={styles.title}>Crush</Text>
      </LinearGradient>

      {/* Body Section */}
      <View style={styles.bodySection}>
        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <LinearGradient
            colors={['#FF69B4', '#FF1493']}
            style={styles.buttonGradient}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign Up Text */}
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dollarIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF1493',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  dollarSign: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  decorativeElement: {
    position: 'absolute',
  },
  swirl1: {
    top: 20,
    left: 20,
  },
  heart1: {
    top: 40,
    left: 10,
  },
  lollipop1: {
    bottom: 50,
    left: 15,
  },
  flower1: {
    bottom: 20,
    left: 20,
  },
  heart2: {
    top: 30,
    right: 25,
  },
  flower2: {
    top: 50,
    right: 15,
  },
  star: {
    bottom: 40,
    right: 20,
  },
  lollipop2: {
    bottom: 15,
    right: 10,
  },
  bodySection: {
    flex: 0.6,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loginButton: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#666',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
