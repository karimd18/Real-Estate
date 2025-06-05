import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainHead = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Ionicons name="md-sunny" size={24} color="#DCAC36" style={styles.icon} />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 10,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: -10,
  },
  line: {
    width: 70,
    height: 2,
    backgroundColor: '#DCAC36',
    marginTop: 10,
  },
});

export default MainHead;
