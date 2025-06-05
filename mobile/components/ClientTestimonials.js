import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { clientTestimonialsData } from '../data/data';

const ClientTestimonials = () => {
  return (
    <View style={styles.container}>
      {clientTestimonialsData.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0D0D0D',
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingVertical: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: '#DCAC36',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
});

export default ClientTestimonials;
