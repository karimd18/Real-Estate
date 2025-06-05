import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen = () => {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>Page Not Found</Text>
      <TouchableOpacity onPress={handleGoHome} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home Page!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.15)',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#DCAC36',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0D0D',
    textTransform: 'uppercase',
  },
});

export default NotFoundScreen;
