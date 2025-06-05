import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

const RequestCallback = () => {
  const handleRequest = () => {
    console.log('Request Callback button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="call" size={40} color="#141414" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Request a Callback</Text>
          <Text style={styles.description}>
            Submit your contact information and any questions you have in mind, and we will happily
            assist you.
          </Text>
        </View>
      </View>
      <Button onPress={handleRequest}>Request A Callback</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#DCAC36',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
});

export default RequestCallback;
