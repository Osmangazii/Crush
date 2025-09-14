import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function SignUpScreen() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    if (!formData.name || !formData.phone || !formData.password || !formData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => router.replace('/(tabs)/home') }
    ]);
  };

  const handleSkip = () => {
    router.replace('/(tabs)/home');
  };

  const handleSocialLogin = (platform: string) => {
    Alert.alert('Social Login', `Login with ${platform} clicked`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section with Gradient Background */}
        <LinearGradient
          colors={['#FFB6C1', '#DDA0DD', '#E6E6FA']}
          style={styles.headerSection}
        >
          <View style={styles.iconContainer}>
            {/* Decorative Elements */}
            <View style={[styles.decorativeElement, styles.heart1]}>
              <IconSymbol name="heart.fill" size={20} color="#FF69B4" />
            </View>
            <View style={[styles.decorativeElement, styles.lollipop1]}>
              <IconSymbol name="star.fill" size={18} color="#FFB6C1" />
            </View>
            <View style={[styles.decorativeElement, styles.flower]}>
              <IconSymbol name="leaf.fill" size={16} color="#98FB98" />
            </View>
            <View style={[styles.decorativeElement, styles.heart2]}>
              <IconSymbol name="heart.fill" size={18} color="#FF69B4" />
            </View>
            <View style={[styles.decorativeElement, styles.star]}>
              <IconSymbol name="star.fill" size={16} color="#FFB6C1" />
            </View>
            <View style={[styles.decorativeElement, styles.lollipop2]}>
              <IconSymbol name="star.fill" size={20} color="#FFB6C1" />
            </View>
            
            {/* Main Dollar Sign Icon */}
            <View style={styles.dollarIconContainer}>
              <Text style={styles.dollarSign}>$</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Skip Button */}
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip for now</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#999"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#999"
            value={formData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
            keyboardType="phone-pad"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            placeholderTextColor="#999"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
          />
          
          <TextInput
            style={styles.input}
            placeholder="Re-type Password"
            placeholderTextColor="#999"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            secureTextEntry
          />

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <LinearGradient
              colors={['#FF69B4', '#FF1493']}
              style={styles.buttonGradient}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Social Login Section */}
          <Text style={styles.orText}>Or Sign Up With</Text>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity 
              style={styles.socialButton} 
              onPress={() => handleSocialLogin('Google')}
            >
              <View style={styles.googleIcon}>
                <Text style={styles.googleText}>G</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialButton} 
              onPress={() => handleSocialLogin('Instagram')}
            >
              <View style={styles.instagramIcon}>
                <IconSymbol name="camera.fill" size={24} color="#E4405F" />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialButton} 
              onPress={() => handleSocialLogin('X')}
            >
              <View style={styles.xIcon}>
                <Text style={styles.xText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerSection: {
    height: 300,
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
    borderWidth: 2,
    borderColor: '#000',
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
  decorativeElement: {
    position: 'absolute',
  },
  heart1: {
    top: 20,
    left: 20,
  },
  lollipop1: {
    top: 10,
    left: 10,
  },
  flower: {
    bottom: 30,
    left: 15,
  },
  heart2: {
    top: 15,
    right: 25,
  },
  star: {
    bottom: 20,
    right: 20,
  },
  lollipop2: {
    bottom: 10,
    right: 10,
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  skipButtonText: {
    color: '#666',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signUpButton: {
    marginTop: 10,
    marginBottom: 30,
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
    borderWidth: 1,
    borderColor: '#000',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  instagramIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
